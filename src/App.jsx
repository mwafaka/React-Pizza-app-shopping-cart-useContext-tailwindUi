// App.js
import {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Details from './Pages/Details';
import DataFetchingComponent from './Pages/DataFetchingComponent';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import ShoppingCard from './components/ShoppingCard';

import { AppContext } from './CreateContext';
const App = () => {
  const [open, setOpen] = useState(true);
  const [shopping, setShopping] = useState([]);


  return (
    <AppContext.Provider value={{open,setOpen,shopping, setShopping}}> 
    <Router>
        <Navbar/>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path="/reservation" element={<Details/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/fetch-data" element={<DataFetchingComponent/>} />
        </Routes>
      </div>
      <ShoppingCard/>
    </Router>
    </AppContext.Provider>
  );
};

export default App;
