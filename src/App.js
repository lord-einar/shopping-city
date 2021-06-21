/* import logo from './logo.svg'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainerComponent from './components/ItemListContainer/ItemListContainerComponent';
import NavBarComponent from './components/VavBar/NavBarComponent';


function App() {
  return (
    <div className='App'>
      <NavBarComponent />
      <ItemListContainerComponent />
    </div>
    
  );
}

export default App;
