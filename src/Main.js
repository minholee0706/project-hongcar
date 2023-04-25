import React from "react";
// import "./Main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from "./components/1_Body";
import Auth from "./components/2_Auth";
import Profile from "./components/3_Profile";
import Shop from "./components/6_Shop";
import MyContract from "./components/9_MyContract";



function Main() {
  // 내 REST API KEY 값. 요약 정보에서 확인 가능.
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "https://hong-car.netlify.app/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return (
    <div>
    <Router>
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Shopping" element={<Shop />} />
        <Route path="/MyContract" element={<MyContract />} />
      </Routes>
    </Router>
    </div>
  );
};

export default Main;