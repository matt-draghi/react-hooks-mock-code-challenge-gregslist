import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

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

  const handleSearch = () =>{
    const searchedItems = items.filter((item) => {
      if(search === ""){
        return true
      }
      else{
        return (
          item.description.toLowerCase().includes(search.toLowerCase()) ||
          item.location.toLowerCase().includes(search.toLowerCase())
        )
      }
    })
    return (<ListingsContainer items={searchedItems} handleDelete={handleDelete}/>)
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleSearch={handleSearch}/>
      {/* <ListingsContainer items={items} handleDelete={handleDelete}/> */}
      {handleSearch()}
    </div>
  );
}

export default App;
