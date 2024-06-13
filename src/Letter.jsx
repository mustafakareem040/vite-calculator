function Letter({ letter, onClick, className }) {
    return (
        <button onClick={() => onClick(letter)} className={className}>
            {letter}
        </button>
    );
}

export default Letter;
