import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Prikaz from './components/Prikaz';
import Admin from './components/Admin';

function App() {
  const [ispiti, setIspiti] = useState([])

  const obrisi = (ispit) => {
    setIspiti(prev => {
      return prev.filter(element => element !== ispit);
    })
  }
  const dodaj = (ispit) => {
    setIspiti(prev => {
      return [...prev, ispit];
    })
  }
  return (
    <BrowserRouter>

      <Switch>
        <Route path='/admin'>
          <Admin ispiti={ispiti} onObrisi={obrisi} onDodaj={dodaj} />
        </Route>
        <Route path='/'>
          <Prikaz ispiti={ispiti} />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;
