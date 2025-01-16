import React, { useState } from 'react';
import './AutoComplete.Module.CSS'

const AutoComplete = () => {
    // Hardkoding av data med liste over bilmerker
    const carBrands = ["Audi", "BMW", "Chevrolet", "Dodge", "Ford", "Honda", "Hyundai", "Kia", "Mazda", "Nissan", "Tesla", "Toyota", "Volkswagen", "Volvo", "Mitsubishi", "Porsche", "Lamborghini", "Ferrari", "Saab", "Fiat", "Oles", "Koenigsegg", "Sondres", "Troll", "Rubens", "Nicklas", "Angelica", "Pasha", "Villius", "Pil", "John Deer", "Jane Doe", "!Tottenham", "!Spurs", "Liverpool", "Abba", "Abast", "Seat", "Abbbak", "ABS", "Adast"];

    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            setSuggestions(carBrands.filter((brand) => 
                brand.toLowerCase().startsWith(value.toLowerCase())
            ));
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div>
            <p>Filter på: {inputValue}</p>
            <input name="carInput" placeholder="Bilmerke" onChange={handleInput} />
            <ul>
                {suggestions.map((suggestion, i) => (
                    <li key={i}>{suggestion}</li>
                ))}
            </ul>
        </div>
    );
};

export default AutoComplete;
