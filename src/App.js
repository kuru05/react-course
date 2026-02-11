import Title from './Title';
import './App.css';
import ProductDetail from './ProductDetail';
import Majeur from './Majeur';
import ProductList from './ProductList';
import Welcome from './Class/Welcome';
import Magasin from './Class/Magasin';
import CompteurDePersonne from './Class/CompteurDePersonne';

function App(props) {
  return (
    <div className="App">
      <h1>React 1</h1>
      <Title />
      <p>Salut {props.name}, tu as {props.age} ans</p>
      <ProductDetail name="Chocolat" price={5} quantity={10} />
      <Majeur name="Merlin" age={20} />


      <h1>React 2</h1>
      <ProductList products={props.products} />
      <Welcome description="Hello" />

      <h1>React 3</h1>
      <h2>Test 1 : 10h </h2>
      <Magasin hour={10} />

      <hr />

      <h2>Test 2 : 5h </h2>
      <Magasin hour={5} />

      <hr />

      <h2>Test 3 : CompteurDePersonnes </h2>
      <CompteurDePersonne />
    </div>
  );

}

export default App;
