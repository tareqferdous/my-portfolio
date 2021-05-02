import './App.scss';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Services from './Components/Services';

function App() {
  return (
    <div className="App">   
      <NavBar></NavBar>
    
      <div>     
        <div class="content">
          <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
            <Services></Services>
            </Route>
            <Route path="/about">
            <AboutPage></AboutPage>
            </Route>
            <Route path="/portfolio">
            <PortfolioPage></PortfolioPage>
            </Route>
            <Route path="/blogs">
            <BlogsPage></BlogsPage>
            </Route>
            <Route path="/contact">
            <ContactPage></ContactPage>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
