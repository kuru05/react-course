import React from 'react';

export default class Magasin extends React.Component {
    render() {
        // On récupère l'heure depuis les props
        const { hour } = this.props;

        // Logique : Ouvert si l'heure est supérieure ou égale à 9 ET inférieure ou égale à 18
        const isOpen = hour >= 9 && hour <= 18;

        return (
            <div>
                <p>Heure actuelle : {hour}h</p>
                {/* Affichage conditionnel */}
                {isOpen ? (
                    <p style={{ color: 'green' }}>Magasin ouvert</p>
                ) : (
                    <p style={{ color: 'red' }}>Magasin fermé</p>
                )}
            </div>
        );
    }
}