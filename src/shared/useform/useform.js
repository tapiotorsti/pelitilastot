import {useState} from 'react';

const useForm = (callback, initialState={}, resetOnSubmit=true) => {

    //Esitellään useState-hook, johon käyttäjän lomakkeelle
    // syöttämä tieto tallenetaan
    const [values, setValues] = useState(initialState);

    //Submit-käsittelijä, joka estää oletustoiminnan ja
    //kutsuu määriteltyä callback-funktiota
    const handleSubmit = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
        if(resetOnSubmit) resetValues();
    }

    //Syötekäsittelijä, joka tallentaa kentän tiedot
    // se nimellä state-muuttujaan
    const handleChange = (event) => {
        event.persist();
        // Tallenetaan kenttään syötetty arvo välimuuttujaan
        let value = event.target.value;
        // Tallenetaan uusi arvo state-muuttujaan  
        setValues(values => ({...values, [event.target.name]: value}));   
    }

    //Funktio, joka palauttaa lomakkeen tiedot alkutilanteeseen
    const resetValues = () => {
        setValues(initialState);
    }

    //Palauta luonnin yhteydessä sekä käsittelijät että
    // state-muuttuja
    return {
        handleSubmit,
        handleChange,
        resetValues,
        setValues,
        values
    };

}

export default useForm;