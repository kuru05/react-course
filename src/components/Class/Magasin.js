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
                {/* Affichage conditionnel */}
                {isOpen ? (
                    <p className="magasin-status status-open">Magasin ouvert</p>
                ) : (
                    <p className="magasin-status status-closed">Magasin fermé</p>
                )}
            </div>
        );
    }
}