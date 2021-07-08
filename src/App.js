import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailConteinerComponent from './components/ItemDetailConteiner/ItemDetailConteinerComponent';
import HomeComponent from './components/Home/HomeComponent'
import NavBarComponent from './components/NavBar/NavBarComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListComponent from './components/ItemList/ItemListComponent';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBarComponent />
        <Switch>
          <Route exact path='/'>
            <HomeComponent></HomeComponent>
            {/* <ItemListContainerComponent /> */}
        {/* <ItemDetailConteinerComponent /> */}
          </Route>
          <Route exact path='/categorias/:category'>
            <ItemListComponent></ItemListComponent>
          </Route>
          <Route exact path='/detalle/:id'>
            <ItemDetailConteinerComponent></ItemDetailConteinerComponent>
          </Route>

        </Switch>
      
      
      </BrowserRouter>
    </div>
    
  );
}

export default App;
