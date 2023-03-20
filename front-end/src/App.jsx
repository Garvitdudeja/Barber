import './index.css'
import { Route, Routes } from 'react-router-dom';
import SalonPage from './Pages/SalonPage';
import HomePage from './Pages/HomePage';
import axios from 'axios';
import Protected from './Components/Authentication/Protected';
import bgImage from './images/bg-image.png';
import Main from './Components/SecondDesign/Main'
import UserProfile from './Pages/UserProfile';
import TestingRedux from './Pages/TestingRedux';
import { createContext, useEffect, useState, useReducer } from 'react';
// import Protected from './Components/Authentication/Protected';

// import 'https://fonts.goonogleapis.com/css2?family=Akaya+Telivigala&family=Dancing+Script:wght@500&family=Lobster&family=Merriweather:ital,wght@0,700;1,700&family=Roboto:wght@300&display=swap';



// function App() {
//   axios.defaults.baseURL = 'http://localhost:4000/';
//   axios.defaults.withCredentials = true
//   const [buttonState, setbuttonState] = useState("ON")
//   return (
//     <>
//     {/* <button onClick={()=>{setbuttonState((prev)=>{
//       if(prev=="ON"){return "OFF"}
//       return "ON"})}}>{buttonState}</button> */}
//     <div className="App">
//       <Routes>
//         <Route path='/' exact element={<HomePage />} />
//         <Route path='/:typeP' exact element={<HomePage></HomePage>} />
//         <Route path='/salon/:id' exact element={<SalonPage></SalonPage>} />
//         <Route path='/testredux' exact element={<TestingRedux></TestingRedux>} />
//         <Route path='/user/profile' exact element={<Protected Component={UserProfile}></Protected>} />
//       </Routes>
//       {/* <Main></Main> */}
//     </div>
//     </>
//   );
// }

const UserContext = createContext(0)
const App = () => {

  const [] = useReducer(reducer ,{count:0})
  const [timer, setCount] = useState(0)
  
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return (<>
    <UserContext.Provider value={{"HELO":"HELP"}}>
      <SalonPage ></SalonPage>
    </UserContext.Provider>
  </>)
}

export default App;
export { UserContext}
