import './index.css'
import { Route,Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import DefaultLayout from './Layout/DefaultLayout';
// import 'https://fonts.googleapis.com/css2?family=Akaya+Telivigala&family=Dancing+Script:wght@500&family=Lobster&family=Merriweather:ital,wght@0,700;1,700&family=Roboto:wght@300&display=swap';


//function Layout
const control = (Page)=> {
  return(<>
  <DefaultLayout>
  <Page></Page>
  </DefaultLayout>
  </>)
}

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' exact element={control(Homepage)}></Route>
      </Routes> 
    </div>
  );
}

export default App;
