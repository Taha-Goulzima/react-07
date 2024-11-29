import { useState } from "react";


export default function Niveau({ setNote }) {
    const [selecetNiveau, setSelectNiveau] = useState('');

    function handleRadioChange(e) {
        setSelectNiveau(e.target.value);
    }

    return (
        <div>
            <h4>Niveau</h4>
            <span>
                <input type="radio"
                    value="Bac"

                    checked={selecetNiveau === 'bac'}
                    onChange={handleRadioChange} />
                <label>bac</label>
            </span>
            <span>
                <input
                    type="radio"
                    value="Niveau Bac"
                    checked={selecetNiveau === "Niveau Bac"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="Niveaubac">Niveau Bac</label>
            </span>
            {selecetNiveau === "Bac" && (
                <span>
                    <label htmlFor="noteBac">Note Bac</label>
                    <input
                        type="number"
                        id="noteBac"
                        min={1}
                        max={20}
                        onChange={e => setNote(e.target.value)}
                    />
                </span>
            )}
        </div>
    )
}