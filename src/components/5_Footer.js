import React from "react";
import './CSS/Footer.css'
import Footer_Email from './IMAGE/Footer_Email.png';
import Footer_Phone from './IMAGE/Footer_Phone.png';
import Footer_Person from './IMAGE/Footer_Person.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer =()=>{

    return (
        <div className="Footer_All">
        <div className="Footer_div">
            
            <div className="Footer_Name">
                <img className="Footer_Person_img" src={Footer_Person} />
                <h5 style={{borderBottom : "2px solid black", padding : "15px"}}>Name</h5>
                <br/>
                <h5>Lee Min Ho</h5>
            </div>

            <div className="Footer_Email">
                <img className="Footer_Email_img" src={Footer_Email} />
                <h5 style={{borderBottom : "2px solid black", padding : "15px"}}>E-mail</h5>
                <br/>
                <h5>krs1994@naver.com</h5>
            </div>

            <div className="Footer_Phone">
                <img className="Footer_Phone_img" src={Footer_Phone} />
                <h5 style={{borderBottom : "2px solid black", padding : "15px"}}>Phone</h5>
                <br/>
                <h5>010 - 5620 - 9103</h5>
            </div>
        </div>
            <div className="Footer_Icons"> 
                <a href="https://twitter.com/" > 
                    <TwitterIcon className="icon"/> 
                </a>
                <a href="https://facebook.com/" style={{margin : "20px"}}>
                    <FacebookIcon className="icon"/> 
                </a>
                <a href="https://www.instagram.com/" >
                    <InstagramIcon className="icon"/>
                </a>
            </div>
            <div className="Footer_com">
            Thank you for visiting my Site!
            </div>
            <br/>
            <div className="Scroll_up">
                <nav>
                <div className="Scroll_icon" >(<h5 style={{display:"inline",color:"black"}}><a  href="#Body_All">▲</a></h5>)</div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;