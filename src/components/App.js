import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  const handleFetchingOfPetsByType = () => {
    if (filters.type === "all") {
      fetch(`http://localhost:3001/pets`)
        .then((r) => r.json())
        .then((data) => setPets(data))
        .catch((err) => console.log(err))
    }
    else {
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then((r) => r.json())
        .then((data) => setPets(data))
        .catch((err) => console.log(err))  
    }
  }
  // console.log(pets);

  useEffect(() => {
    handleFetchingOfPetsByType()
  }, [filters.type])

  const handleFilterChange = (type) => {
    setFilters((previousFilter) => ({...previousFilter, type}))
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilterChange} onFindPetsClick={handleFetchingOfPetsByType} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pet={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;