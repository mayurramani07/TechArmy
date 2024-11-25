import React, { useState } from "react";
import "./PropertyListing.css";

const PropertyListing = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const images = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...images]);
  };

  return (
    <div className="property-listing">
      <h1>List Your Property</h1>
      <p>Provide the details of your property for rent.</p>
      <form>
        <label>
          Property Name:
          <input type="text" name="propertyName" />
        </label>
        <label>
          Location:
          <input type="text" name="location" />
        </label>
        <label>
          Rent Price:
          <input type="number" name="price" />
        </label>
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <label>
          Upload Images:
          <input
            type="file"
            name="propertyImages"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </label>
        <div className="image-preview">
          {selectedImages.map((image, index) => (
            <img key={index} src={image} alt={`Preview ${index}`} />
        ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PropertyListing;
