import Title from './Title';
import './App.css';
import ProductDetail from './ProductDetail';
import Majeur from './Majeur';
import ProductList from './ProductList';

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
    </div>
  );
}

export default App;
