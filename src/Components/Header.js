import React from 'react';
import Typed from 'react-typed';


const Header = () => {
    return (
        <>

<div className="header-wrapper pt-5">
            <div class="main-info text-center">
                <h1 className="pb-3">Hello, I'M <span style={{color: 'orange'}}>TAREQ FERDOUS</span></h1>
                <Typed
                    className="typed-text"
                    strings={["Front-End Web Developer", "MERN Stack Developer", "Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                
                <p className="text-info" style={{color: '#fff', width: '65%', textAlign:"center", paddingTop: '25px'}}>I count myself as a hardworking person. To pursue a challenging career in a
                competitive world where enthusiasm, honesty, hard work and passion will support me to
                grow myself as well as utilize my knowledge and expertise for
                professional development in the relevant field.</p>


            <div className="text-center pt-3"><button style={{ borderRadius:'5px',cursor: 'pointer'}} className="btn-primary"><a href="https://drive.google.com/file/d/1M6NC19yP75xMQ7O7FYQ1l-mGANzY-Cfa/view?usp=sharing" class="btn btn-primary" target="_blank">Download CV</a></button></div>

                       
            </div>
            
        </div>

        </>
    );
};

export default Header;