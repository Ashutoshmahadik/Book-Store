import React, { useState } from "react";
import "./Card.css";
import { AiOutlineClose } from "react-icons/ai";

const Card = ({ book }) => {
  const [showPopup, setShowPopup] = useState(false);

  if (!book || !book.volumeInfo) {
    return null;
  }

  const { title, authors, imageLinks, categories, description } =
    book.volumeInfo;

  const authorText = authors ? authors.join(", ") : "Unknown Author";
  const thumbnail = imageLinks ? imageLinks.thumbnail : null;

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleImageError = (event) => {
    event.target.style.display = "none";
    event.target.nextSibling.style.display = "block";
  };

  return (
    <div className="main-container">
      <div className="card-container">
        <div className="card" onClick={togglePopup}>
          {thumbnail ? (
            <img src={thumbnail} alt={title} onError={handleImageError} />
          ) : (
            <div className="placeholder-bg"></div>
          )}
          <div className="card-details ">
            <div className="font divider">
              <h2 cla>{title}</h2>
            </div>

            <div className="description-section ">
              <p className="description-title">Authors: </p>{" "}
              <p className="description-content text-align">{authorText}</p>
            </div>
            <div className="description-section">
              {" "}
              <p className="description-title">Categories: </p>
              <p className="description-content text-align">
                {categories ? categories.join(", ") : "Unknown Category"}
              </p>
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup-overlay" onClick={togglePopup}>
            <div className="popup-content" onClick={(e) => e.stopPropagation()}>
              <h2>{title}</h2>

              <div className="close-button" onClick={togglePopup}>
                {" "}
                <AiOutlineClose />
              </div>

              {thumbnail ? (
                <img src={thumbnail} alt={title} onError={handleImageError} />
              ) : (
                <div className="placeholder-bg"></div>
              )}
              <div className="description-section ">
                <p className="description-title">Authors: </p>{" "}
                <p className="description-content text-align">{authorText}</p>
              </div>
              <div className="description-section">
                {" "}
                <p className="description-title">Categories: </p>
                <p className="description-content text-align">
                  {categories ? categories.join(", ") : "Unknown Category"}
                </p>
              </div>
              <div className="popup-des">
                <div className="description-section">
                  <p className="description-title">Description: </p>
                  <p className="description-content">
                    {description ? description : "No description available"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
