export default function Inscription({ lname, setLname, fname, setFname, age, setAge, cin, setCin }) {
    function handleCinChange(e) {
      let value = e.target.value;
      value = value.replace(' ', '').toUpperCase();
  
      if (!value) setCin('');
      if (value.length === 8) return;
      if (value.match(/^[A-Z]{1,2}[0-9]*$/)) {
        setCin(value);
      }
    }
  
    return (
      <div>
        <p>Nom</p>
        <input
          type="text"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <p>Prenom</p>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <p>Age</p>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <p>CIN</p>
        <input
          type="text"
          value={cin}
          onChange={handleCinChange}
        />
      </div>
    );
  }
  