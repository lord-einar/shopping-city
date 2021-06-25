/* import logo from './logo.svg'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailConteinerComponent from './components/ItemDetailConteiner/ItemDetailConteinerComponent';
import ItemListContainerComponent from './components/ItemListContainer/ItemListContainerComponent';
import NavBarComponent from './components/NavBar/NavBarComponent';


function App() {
  return (
    <div className='App'>
      <NavBarComponent />
      {/* <ItemListContainerComponent /> */}
      <ItemDetailConteinerComponent />
    </div>
    
  );
}

export default App;
