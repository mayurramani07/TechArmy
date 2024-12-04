import { useState } from 'react';
import axios from 'axios';

function App() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [properties, setProperties] = useState([]);
  const [searchType, setSearchType] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchRent, setSearchRent] = useState('');
  const [searchTime, setSearchTime] = useState('');

  const registerOwner = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register_owner', {
        firstname,
        lastname,
        email,
        password
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error occurred');
    }
  };

  const searchProperties = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/search_properties', {
        property_type: searchType,
        city: searchCity,
        rent: searchRent,
        time: searchTime
      });
      setProperties(response.data);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Error occurred');
    }
  };

  return (
    <div>
      <h2>Property Rental Platform</h2>
      <div>
        <h3>Register as Owner</h3>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstname} 
          onChange={(e) => setFirstname(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastname} 
          onChange={(e) => setLastname(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={registerOwner}>Register</button>
      </div>

      <div>
        <h3>Search Properties</h3>
        <input 
          type="text" 
          placeholder="Property Type" 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="City" 
          value={searchCity} 
          onChange={(e) => setSearchCity(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Rent" 
          value={searchRent} 
          onChange={(e) => setSearchRent(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Time" 
          value={searchTime} 
          onChange={(e) => setSearchTime(e.target.value)} 
        />
        <button onClick={searchProperties}>Search</button>
      </div>

      <div>
        <h3>{message}</h3>
      </div>

      <div>
        <h3>Property Results</h3>
        {properties.length > 0 ? (
          <ul>
            {properties.map((property) => (
              <li key={property._id}>
                Property Type: {property.property_type} - City: {property.city} - Rent: {property.rent} - Time: {property.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </div>
  );
}

export default App;
