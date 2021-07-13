import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailConteinerComponent from './components/ItemDetailConteiner/ItemDetailConteinerComponent';
import HomeComponent from './components/Home/HomeComponent'
import NavBarComponent from './components/NavBar/NavBarComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListComponent from './components/ItemList/ItemListComponent';
import { ShopComponentContext } from './components/context/ShopContext';


function App() {
  return (
    <div className='App'>
      <ShopComponentContext>
        <BrowserRouter>
          <NavBarComponent />
          <Switch>
            <Route exact path='/'>
              <HomeComponent></HomeComponent>
            </Route>
            <Route exact path='/categorias/:category'>
              <ItemListComponent></ItemListComponent>
            </Route>
            <Route exact path='/detalle/:id'>
              <ItemDetailConteinerComponent></ItemDetailConteinerComponent>
            </Route>
          </Switch>
        </BrowserRouter>
      </ShopComponentContext>
    </div>
    
  );
}

export default App;
