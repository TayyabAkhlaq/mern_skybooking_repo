
import Home from './screens/Home';
import HotelHome from './screens/HotelHome';
import Carhome from './screens/Carhome'
import Contact from './screens/Contact';
import About from './screens/About';
import Blog from './screens/Blog';
import Login from './screens/Login';
import Signup from './screens/signup';

import { BrowserRouter as Router , Routes , Route}  from 'react-router-dom';

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  return (
    <Router>
    <div>
      <Routes>
        <Route className ='active' exact path= '/' element ={<Home/>} />
        <Route  exact path= '/hotel' element ={<HotelHome/>} />
        <Route exact path= '/carhire' element ={<Carhome/>} />
        <Route exact path= '/about' element ={<About/>} />
        <Route exact path= '/contact' element ={<Contact/>} />
        <Route exact path= '/blogs' element ={<Blog/>}/>
        <Route exact path= '/login' element ={<Login/>}/>
        <Route exact path= '/createuser' element ={<Signup/>}/>

      </Routes>
    </div>

    </Router>
  );
}

export default App;
