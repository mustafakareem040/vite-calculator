import './App.css'
import Letter from "./Letter.jsx"
import { useState } from "react";

function Input({ value, onChange, onKeyDown }) {
    return (
        <input
            type='text'
            placeholder='Put math here...'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
        />
    );
}

function App() {
    const [value, setValue] = useState('');

    const handleClick = (letter) => {
        setValue((prevValue) => prevValue + letter);
    }

    const handleSubmit = () => {
        try {
            setValue(eval(value).toString());
        } catch {
            setValue("Error");
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleBackspace = () => {
        setValue((prevValue) => prevValue.slice(0, -1));
    }

    const letters = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        "(", ")", "+", "-", "*", "/"
    ];

    return (
        <>
            <Input value={value} onChange={setValue} onKeyDown={handleKeyDown} />
            <section>
                {letters.map((letter, index) => (
                    <Letter
                        key={index}
                        letter={letter}
                        onClick={handleClick}
                    />
                ))}
                <Letter letter={"="} onClick={handleSubmit} className={"submit"} />
                <Letter letter={"←"} onClick={handleBackspace} className={"backspace"} />
            </section>
        </>
    )
}

export default App;
