import React, { useState } from "react";

export default function Filieres  ({ onChange }) {
  const [selectedFiliere, setSelectedFiliere] = useState("");
  const [filieres, setFilieres] = useState([]);

  const handleAddFiliere = () => {
    if (
      selectedFiliere &&
      !filieres.includes(selectedFiliere) &&
      filieres.length < 3
    ) {
 
      const updatedFilieres = [...filieres, selectedFiliere];
      setFilieres(updatedFilieres);
      setSelectedFiliere("");
      onChange({ target: { value: updatedFilieres } });
    }
  };

  function handleRemoveFiliere (filiere) {
    const updatedFilieres = filieres.filter((f) => f !== filiere);
    setFilieres(updatedFilieres);
    onChange({ target: { value: updatedFilieres } });
  };

  return (
    <div >
      <h4>Filieres:</h4>

      <div className="mb-3">
        {filieres.map((filiere, index) => (
          <div key={index} >
            <span>{filiere}</span>
            <button
           
              onClick={() => handleRemoveFiliere(filiere)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>

      {filieres.length < 3 && (
        <>
          <select
            value={selectedFiliere}
            onChange={(e) => setSelectedFiliere(e.target.value)}
          >
            <option value="">Select a filière</option>
            <option value="DEV">DEV</option>
            <option value="GE">GE</option>
            <option value="INFRA">INFRA</option>
          </select>
          <button onClick={handleAddFiliere}>
            Ajouter
          </button>
        </>
      )}
    </div>
  );
};
