import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home.js';
import AboutUs from './components/pages/AboutUs.js';
import Shop from './components/pages/Shop.js';
import NavBar from './components/navigation/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import Count from './components/count/ItemCount';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBar /> }>
    <Route index element={ <Home /> } />
    <Route path='aboutUs' element={ <AboutUs /> } />
    <Route path='shop' element={ <Shop /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>
<ItemListContainer greeting='Hello User'/>
<Count/>

    </div>
  );
}

export default App;