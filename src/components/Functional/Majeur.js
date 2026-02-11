function Majeur(props) {
    return props.age >= 18 ? <p>{props.name} est majeur</p> : <p>{props.name} est mineur</p>;
}

export default Majeur;