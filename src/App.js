import './App.scss';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState, useEffect} from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Services from './Components/Services';
import Header from './Components/Header';
import Particles from 'react-particles-js';
import Footer from './Components/Footer';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 5000)
  },[])

  const override = css`
  display: flex;
  margin: 250px auto;
  border-color: red;
  padding: 50px;
`;

  return (
    <div className="App">

      {
        loading ?

        <ClipLoader 
        css={override}
          size = {30}
          color = {"#36D7B7"}
          loading = {loading}
        />

        :

        <div class="content">
           <Particles
              params={{
                particles: {
                  number: {
                    value: 30,
                    density:{
                      enable: true,
                      value_area: 900
                    }
                  },
                  shape:{
                    type: "square",
                    stroke: {
                      width: 6,
                      color: "#98FB98"
                    }
                  }
                }
              }}
            /> 
          <NavBar></NavBar>
         
          <Switch>
          <Route exact path="/">
            
            <Header></Header>
            <Services></Services>
            
            
            <AboutPage></AboutPage>
            <PortfolioPage></PortfolioPage>
            <BlogsPage></BlogsPage>
            <ContactPage></ContactPage>
            <Footer></Footer>
            </Route>
            <Route path="/about">
            <AboutPage></AboutPage>
            <Footer></Footer>
            </Route>
            <Route path="/portfolio">
            <PortfolioPage></PortfolioPage>
            <Footer></Footer>
            </Route>
            <Route path="/blogs">
            <BlogsPage></BlogsPage>
            <Footer></Footer>
            </Route>
            <Route path="/contact">
            <ContactPage></ContactPage> 
            <Footer></Footer>
            </Route>
          </Switch>
        </div>
        
      } 

      <div>     
        
      </div>
    </div>
  );
}

export default App;
