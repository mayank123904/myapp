import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import './App.css';
import { Toaster } from "react-hot-toast";
import Home from './components/pages/home/home';
import Donateblood from './components/pages/donateblood/donateblood';
import Finddonors from './components/pages/bloodneed/bloodneed';
import Doner from './components/pages/adddoner/adddoner';
// import Bloodbank from './components/pages/bloodbank/bloodbank';

function App() {
  return (<Router basename='/myapp'>
  <Routes>
    <Route exact path="/myapp" element={<Home />} />
    <Route exact path="/donation" element={<Donateblood/>} />
    <Route exact path="/bloodneed" element={<Finddonors />} />
    <Route exact path="/newdoner" element={<Doner />} />
    {/* <Route exact path="/bloodbank" element={<Bloodbank />} /> */}
    </Routes>
    {/* <Footer /> */}
    <Toaster />
  </Router>
  );
}

export default App;
