import { useState, useEffect } from 'react';

function CycleDeVie() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        if (count > 0) {
            alert(`Le compteur a changé ! Nouvelle valeur : ${count}`);
        }
    }, [count]); // Dépendance explicite : s'exécute uniquement si 'count' change

    return (
        <div className="cycle-de-vie">
            <h2>Cycle de Vie & useEffect</h2>
            <p>Compteur : {count}</p>
            <button onClick={handleClick}>Incrémenter</button>
            <p><em>Une alerte s'affichera à chaque changement du compteur.</em></p>
        </div>
    );
}

export default CycleDeVie;
