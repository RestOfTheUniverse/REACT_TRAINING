import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
 
import Details from './components/Details';
import Default from './components/Default';

const Cart = lazy(() => import('./components/Cart'));

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/products" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details/:id" component={Details} />
          <Route exact path="/" component={ProductList} />
          <Route default component={Default} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


main.chunk.js 

With Lazy ==> main.chunk.js is minus Cart module

When Cart link is clicked it loads the "cart" module