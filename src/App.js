import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemDetailConteinerComponent from './components/ItemDetailConteiner/ItemDetailConteinerComponent';
import HomeComponent from './components/Home/HomeComponent'
import NavBarComponent from './components/NavBar/NavBarComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemListComponent from './components/ItemList/ItemListComponent';
import { ShopComponentContext } from './components/context/ShopContext';
import CartComponent from './components/CartComponent/CartComponent';


function App() {
  return (
    <div className='App'>
      <ShopComponentContext>
        <BrowserRouter>
          <NavBarComponent />
          <Switch>
            <Route exact path='/'>
              <HomeComponent />
            </Route>
            <Route exact path='/categorias/:category'>
              <ItemListComponent />
            </Route>
            <Route exact path='/detalle/:id'>
              <ItemDetailConteinerComponent />
            </Route>
            <Route exact path='/cart'>
              <CartComponent />
            </Route>

          </Switch>
        </BrowserRouter>
      </ShopComponentContext>
    </div>
    
  );
}

export default App;
