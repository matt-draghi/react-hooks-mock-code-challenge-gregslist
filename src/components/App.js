import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

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

  const itemsToDisplay = items.filter((item) => item.description.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <ListingsContainer items={itemsToDisplay} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
