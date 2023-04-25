import React from "react";
import "./CSS/Header.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Header =()=>{
    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = "https://hong-car.netlify.app/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    return(
        <div className="Header_All">
            <div className="Header_Menu" id="navbarResponsive">
                <a className="Nav_Brand" href="https://hong-car.netlify.app/">Hong Car</a>
                    <div className="Nav_Menu">
                        <nav>
                        <ul className="Header_Navbar">
                            <li className="nav-item"><a className="nav-item2" href="#Main_Home_CarPic">About</a></li>
                            <li className="nav-item"><a className="nav-item2" href="#Main_Home_AboutUs">Projects</a></li>
                            {/* <li className="nav-item"><a  href="#signup">Contact</a></li> */}
                            <li className="nav-item">
                                <Link to={KAKAO_AUTH_URL} className="KakaoLogin">Kakao Login</Link>
                            </li>
                            
                        </ul>
                        </nav>
                    </div>
            </div>
            
        </div>
        
    );
};


export default Header;