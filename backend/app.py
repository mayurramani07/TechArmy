from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
from email_validator import validate_email, EmailNotValidError
from smtplib import SMTP
from bson.objectid import ObjectId

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key'  


app.config["MONGO_URI"] = "mongodb://localhost:27017/rental_properties"  
mongo = PyMongo(app)
db = mongo.db

@app.route('/')
def home():
    return "Welcome to Property Rental Platform API!"


@app.route('/api/register_owner', methods=['POST'])
def register_owner():
    try:
        
        data = request.get_json()
        
        if not all(key in data for key in ('firstname', 'lastname', 'email', 'password')):
            return jsonify({"error": "Missing required fields"}), 400
        
        firstname = data['firstname']
        lastname = data['lastname']
        email = data['email']
        password = data['password']

        
        try:
            validate_email(email)
        except EmailNotValidError as e:
            return jsonify({"error": f"Invalid email address: {str(e)}"}), 400

        owner_id = db.owners.insert_one({
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "password": password
        }).inserted_id

        
        send_email(email, "Welcome to our Property Rental Platform!")
        
        return jsonify({"message": "Registration successful!"}), 200

    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500


@app.route('/api/search_properties', methods=['POST'])
def search_properties():
    try:
        
        data = request.get_json()
        
        if not all(key in data for key in ('property_type', 'city', 'rent', 'time')):
            return jsonify({"error": "Missing required fields"}), 400
        
        property_type = data['property_type']
        city = data['city']
        rent = data['rent']
        time = data['time']

        results = db.properties.find({
            "property_type": property_type,
            "city": city,
            "rent": rent,
            "time": time
        })

        properties = list(results)  
        for property in properties:
            property['_id'] = str(property['_id'])  

        return jsonify(properties), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500
    
@app.route('/api/properties', methods=['GET'])
def get_properties():
    try:
        results = db.properties.find()
        properties = list(results)  
        for property in properties:
            property['_id'] = str(property['_id'])  

        return jsonify(properties), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500


@app.route('/api/add_property', methods=['POST'])
def add_property():
    try:
        data = request.get_json()
        
        if not all(key in data for key in ('property_type', 'city', 'rent', 'time')):
            return jsonify({"error": "Missing required fields"}), 400
        
        property_type = data['property_type']
        city = data['city']
        rent = data['rent']
        time = data['time']

        property_id = db.properties.insert_one({
            "property_type": property_type,
            "city": city,
            "rent": rent,
            "time": time
        }).inserted_id

        return jsonify({"message": "Property added successfully!"}), 200
    except Exception as e:
        return jsonify({"error": f"An error occurred: {str(e)}"}), 500

def send_email(recipient, body):
    sender = 'your_email@gmail.com'
    password = 'your_email_password'
    subject = "Welcome to Property Rental Platform"
    try:
        with SMTP('smtp.gmail.com', 587) as smtp:
            smtp.starttls()
            smtp.login(sender, password)
            message = f'Subject: {subject}\n\n{body}'
            smtp.sendmail(sender, recipient, message)
            print("Email sent successfully!")
    except Exception as e:
        print(f"Error sending email: {e}")


if __name__ == '__main__':
    app.run(debug=True)

