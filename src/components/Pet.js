import React, { useState } from "react";

function Pet( {pet} ) {
  console.log(pet);
  const {type, gender, age, weight, name, isAdopted} = pet

  const [adopted, setIsAdopted] = useState(isAdopted);

  const handleAdoptionStatusClick = () => {
    setIsAdopted(adopted => (!adopted))
  }

  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {gender === "male" ? '♂' : '♀'}
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {/* <button className="ui disabled button">Already adopted</button>
        <button className="ui primary button">Adopt pet</button> */}
        <button className={adopted ? 'ui disabled button' : 'ui primary button'} onClick={handleAdoptionStatusClick}> 
          {adopted ? 'Already adopted' : 'Adopt Pet'}
        </button>
      </div>
    </div>
  );
}

export default Pet;