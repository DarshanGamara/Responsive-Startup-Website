import { Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Portfolio from './Pages/Portfolio/Portfolio';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import MainHeader from './Components/MainHeader';
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/Portfolio">
          <Portfolio />
        </Route>
        <Route path="/Service">
          <Service />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
