import Title from './Title';
import '../../assets/styles/App.css';
import ProductDetail from '../Functional/ProductDetail';
import Majeur from '../Functional/Majeur';
import ProductList from '../Functional/ProductList';
import Welcome from '../Class/Welcome';
import Magasin from '../Class/Magasin';
import CompteurDePersonne from '../Class/CompteurPersonne';
import GuessNumber from '../Class/GuessNumber';
import AddProduct from '../Functional/AddProduct';
import ContactData from '../Functional/ContactData';
import CycleDeVie from '../Functional/CycleDeVie';
import { useState } from 'react';

function App(props) {

  const [currentPage, setCurrentPage] = useState('accueil');

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <ProductList />;
      case 'contact':
        return <ContactData />;
      case 'admin':
        return <AddProduct />;
      case 'exercices':
        return (
          <div className="exercices-wrapper">
            <section className="section-card">
              <h1 className="section-title">React 1</h1>
              <Title />
              <p className="user-info">Salut <strong>{props.name}</strong>, tu as <strong>{props.age}</strong> ans</p>
              <div className="component-wrapper">
                <ProductDetail name="Chocolat" price={5} quantity={10} />
              </div>
              <div className="component-wrapper">
                <Majeur name="Merlin" age={20} />
              </div>
            </section>
            <section className="section-card">
              <h1 className="section-title">React 2</h1>
              <div className="component-wrapper">
                <Welcome description="Hello" />
              </div>
            </section>
            <section className="section-card">
              <h1 className="section-title">React 3</h1>
              <div className="sub-section">
                <h2>Test 1 : 10h </h2>
                <Magasin hour={10} />
              </div>
              <div className="divider"></div>
              <div className="sub-section">
                <h2>Test 2 : 5h </h2>
                <Magasin hour={5} />
              </div>
              <div className="divider"></div>
              <div className="sub-section highlight">
                <h2>Test 3 : CompteurDePersonnes </h2>
                <CompteurDePersonne />
              </div>
              <div className="divider"></div>
              <div className="sub-section">
                <h2>Exercice : Guess Number</h2>
                <GuessNumber />
              </div>
            </section>
            <section className="section-card">
              <h1 className="section-title">React 5 (Cycle de Vie)</h1>
              <CycleDeVie />
            </section>
          </div>
        );
      default:
        return <ProductList />;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <nav className="navigation">
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('accueil'); }}>Accueil</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}>Contact</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('admin'); }}>Admin</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('exercices'); }}>Anciens Exercices</a>
        </nav>

        <div className="page-content">
          {renderPage()}
        </div>
      </div>
    </div>
  );

}

export default App;
