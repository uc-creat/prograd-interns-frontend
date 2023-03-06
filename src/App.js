import logo from './logo.svg';
import './App.css';
import Login from "./components/loginbutton"
import SearchBar from './components/Searchbar'
import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:3000'
})
function App() {
  
  return (
    <div className="App">
      <ul>
      <h1 className ="welcome">Art Gallery</h1>
        <li> <Login/></li>
        
      </ul>
      <SearchBar/>

       
    </div>
  );
}

export default App;