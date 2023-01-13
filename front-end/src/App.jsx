import './index.css'
import { Route,Routes } from 'react-router-dom';
import SalonPage from './Pages/SalonPage';
import HomePage from './Pages/HomePage';
import axios from 'axios'
// import Protected from './Components/Authentication/Protected';
import UserProfile from './Pages/UserProfile';
// import 'https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Dancing+Script:wght@500&family=Lobster&family=Merriweather:ital,wght@0,700;1,700&family=Roboto:wght@300&display=swap';



function App() {
  axios.defaults.baseURL = 'http://localhost:4000/'
  return (
    <div className="App">
      
      <Routes>
      <Route path='/' exact element={<HomePage/>}/>
      <Route path='/:typeP' exact element={<HomePage></HomePage>}/>
      <Route path='/salon' exact element={<SalonPage></SalonPage>}/>
      <Route path='/user/profile/:id' exact element={<UserProfile/>}/>
      </Routes> 
    </div>
  );
}

export default App;
