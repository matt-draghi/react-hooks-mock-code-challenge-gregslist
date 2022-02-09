import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({items, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {items.map((item)=>{
          return (
            <ListingCard 
              key={item.id}
              id={item.id}
              description={item.description}
              image={item.image}
              location={item.location}
              handleDelete={handleDelete}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
