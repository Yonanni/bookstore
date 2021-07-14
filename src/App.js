import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/Home';
import { useState } from 'react';


function App() {
  const [search, setSearch] = useState("")
  // changeSearchState = (text) => this.setState({ search: text })

  const searchFunc = (text) => {
    setSearch(text)
  } 
  return (
    <div className="App">
      <MyNav search={search} filtered={searchFunc}/>
      <Home search={search} filtered={searchFunc}/>
      <MyFooter />
    </div>
  );
}

export default App;
