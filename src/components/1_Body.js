import "./CSS/Body.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import car_img1 from "./IMAGE/Main_Home_car2.png";
import car_img2 from "./IMAGE/Main_Home_car3.png";
import car_img3 from "./IMAGE/car_pic.jpg";
import Header from "./4_Header";
import Footer from "./5_Footer";

function Body() {
  // 본인의 REST API KEY 값. 요약 정보에서 확인 가능하다.
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "https://hong-car.netlify.app/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return (
    <div>
        <div className="Body_All" id="Body_All">
            <Header />
            <div className="Main_First">
                <div className="Main_Text" id="Main_Text">Car Space</div>
            </div>
            
                <div className="Main_Home_CarPic" id="Main_Home_CarPic">
                    <div className="CarPic_text">
                        <h1>Trust</h1>
                        <h5>We only sell reliable products.</h5>
                        <h5>We make transactions that both sellers and buyers can be satisfied with.</h5>
                        <h1>Cheap</h1>
                        <h5>We offer it at the lowest price.</h5>
                        <h5>We only sell products at a lower price than any other site.</h5>
                        <h1>Proven</h1>
                        <h5>We select and sell only products verified by skilled engineers.</h5>
                    </div>
                    
                </div>
                <div id="Main_Home_AboutUs"></div><br/><br/><br/><br/><br/><br/><br/>


            <div className="Main_Home_AboutUs" >
                <div className="Main_Home_CarPic2" >
                    
                    <div className="speed_car">
                        <div className="Main_Home_CarPic2_car"><img src={car_img1} className="Main_Home_car2" /></div>
                            <div className="Main_Home_CarPic2_text">
                                <h2 style={{color:"white"}}>Speed</h2>
                                <a style={{color:"lightgray"}}>
                                We offer the fastest transaction.<br/>
                                Get the car you want without waiting. <br/>
                                We provide only fast and reliable transactions.<br/>
                                We bring you the best car faster than bullets.<br />
                                </a>
                            </div>
                    </div>

                
                    <div className="speed_car">
                            <div className="Main_Home_CarPic3_text">
                                <h2 style={{color:"white"}}>Quality</h2>
                                <a style={{color:"lightgray"}}>
                                We provide only reliable quality products to our <br/>
                                customers. We strive to provide safe cars to our <br/> 
                                customers with products that are maintained and <br/>
                                repaired by the best professional engineers. <br/>
                                </a>
                            </div> 
                        <div className="Main_Home_CarPic3_car"><img src={car_img2} className="Main_Home_car3" /></div> 
                    </div>

                </div>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            
        </div>
        <div className="Main_Home_CarPic4">
                <div className="Main_Home_CarDiv">
                    <div className="car4_img"><img src={car_img3} className="Main_Home_car4" /> </div>
                    <div className="Main_Home_car4_text">
                    <a style={{color:"lightgray"}}>
                                    We provide only reliable quality products to our <br/>
                                    customers. We strive to provide safe cars to our <br/> 
                                    customers with products that are maintained and <br/>
                                    repaired by the best professional engineers. <br/>
                                    </a>
                    </div> 
                </div>
        </div>
        <Footer />
    </div>
  );
};

export default Body;