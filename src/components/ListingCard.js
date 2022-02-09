import React, {useState} from "react";

function ListingCard({id, description, image, location, handleDelete}) {

  const [isFavorited, setIsFavorited] = useState(false)
  
  const clickFavoriteButton = () =>{
    // console.log("Favorited:", description)
    setIsFavorited(!isFavorited)
  }

  const clickDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`,{
      method:"DELETE"
    })
    .then(resp => resp.json())
    .then(() => handleDelete(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button onClick={clickFavoriteButton} 
            className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={clickFavoriteButton}
            className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          onClick={clickDelete}
          className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
