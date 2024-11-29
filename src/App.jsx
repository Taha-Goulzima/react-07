import "./App.css";
import Inscription from "./Inscription";
import { useState } from 'react';
import Niveau from "./Niveau";
import Filieres from "./Filieres";

function App() {
  const [result, setResult] = useState(null);
  const [note, setNote] = useState('');
  const [filieres, setFilieres] = useState([]);
  const [lname, setLname] = useState('');
  const [fname, setFname] = useState('');
  const [age, setAge] = useState('');
  const [cin, setCin] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!lname || !fname || !age || !cin || !note || filieres.length !== 3) {
      return;
    }
    const newInscription = { lname, fname, age, cin, note, filieres };
    setResult(newInscription);

   
    setLname('');
    setFname('');
    setAge('');
    setCin('');
    setNote('');
    setFilieres([]);
  }

  function handleFiliereChange(e) {
    const selectedFiliere = e.target.value;
    if (selectedFiliere && !filieres.includes(selectedFiliere)) {
      setFilieres((prevFilieres) => [...prevFilieres, selectedFiliere]);
    }
  }

  return (
    <>
      <div>
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit}>
          <Inscription
            lname={lname}
            setLname={setLname}
            fname={fname}
            setFname={setFname}
            age={age}
            setAge={setAge}
            cin={cin}
            setCin={setCin}
          />
          <Niveau setNote={setNote} />
          <Filieres onChange={handleFiliereChange} />
          <input type="submit" value="S'inscrire" />
        </form>

        <div>
          <h4>Resultat:</h4>
          {result ? (
            <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Age</th>
                  <th>CIN</th>
                  <th>Bac Note (/20)</th>
                  <th>Filières</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{result.lname}</td>
                  <td>{result.fname}</td>
                  <td>{result.age}</td>
                  <td>{result.cin}</td>
                  <td>{result.note}</td>
                  <td>{result.filieres.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>Aucun résultat pour le moment</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
