import React from "react";
import Pet from './Pet';

function PetBrowser( {pet} ) {
  const petsDisplayed = pet.map((p) => {
    return (
        <Pet key={p.id} pet={p} />
    )
  })
  // console.log(pet);

  return (
    <div className="ui cards">
      {petsDisplayed}
    </div>
  );
}

export default PetBrowser;