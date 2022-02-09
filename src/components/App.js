import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(resp => resp.json())
    .then(itemData => setItems(itemData))
  }, [])

  const handleDelete = (deletedId) =>{
    const itemsAfterDeletion = items.filter(item =>{
      return item.id !== deletedId
    })
    setItems(itemsAfterDeletion)
  }

  return (
    <div className="app">
      <Header />
      <ListingsContainer items={items} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
