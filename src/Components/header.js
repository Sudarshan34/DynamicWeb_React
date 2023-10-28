import React from "react";
import logo from './logo2.jpg';

function Head() {
    return (
        <div className="root1">

            <div className="cname">
                <img src={logo}/>
                <div className="names">
                <h1>Family <span>  Wellness</span></h1>
                    <p>MASSAGE THERAPY</p>
                
                </div>
            </div>
            <div className="nav">
                <button className="home">
                <a href="">Home</a>
                </button>

                <button className="abt">
                <a href="">About</a>
                </button>

                <button className="serv">
                <a href="">Services</a>
                </button>

                <button className="faq">
                <a href="">FAQ</a>
                </button>

                <button className="cnt">
                <a href="">Contact</a>
                </button>
                
            </div>
        </div>
        
    )
}


export default Head;