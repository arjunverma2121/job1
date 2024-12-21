import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setUserData({
          image: user.picture.large,
          firstName: user.name.first,
          lastName: user.name.last,
          gender: user.gender,
          phone: user.phone,
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="card">
      <div className="card-image">
        <img src={userData.image} alt="User" />
      </div>
      <div className="card-info">
        <p>
          <strong>FirstName:</strong> {userData.firstName} {userData.lastName}
        </p>
       
        <p>
          <strong>Gender:</strong> {userData.gender}
        </p>
        <p>
          <strong>Phone Number:</strong> {userData.phone}
        </p>
      </div>
    </div>
  );
};

export default Card;
