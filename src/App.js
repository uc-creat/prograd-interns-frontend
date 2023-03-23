
import './App.css';
import Login from "./components/loginbutton"
import SearchBar from './components/Searchbar'
import Images from "./components/API"
import SignUp from './components/signUp/SignUpbutton'
//secret key:psRZS85EbYI_azLKhCnAsIA1wvJTJoxA5wTnQBUWHSg
//acess key:c_5GHI_6hF96HjT0v20zprIiaReqSrttWSWXTYxAw5Y
//api: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
function App() {
  
  return (
    <div className="App">
      <ul>
      <h1 className ="welcome">Art Gallery</h1>
        <li> <Login/></li>
        <li><SignUp/></li>
      </ul>
      <SearchBar/>
      <div className='grid-container'>
      <Images />
      </div>
      
       
    </div>
  );
}

export default App;