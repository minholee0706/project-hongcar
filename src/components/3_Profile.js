import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CSS/Profile.css"
import HomeIcon from '@material-ui/icons/Home';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Web3 from "web3";


const Profile = () => {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
 
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "https://hong-car.netlify.app";
  const KAKAO_LOGOUT_URL = `https://kauth.kakao.com/oauth/logout?client_id=${REST_API_KEY}&logout_redirect_uri=${REDIRECT_URI}`;

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  const [web3, setWeb3] = useState();
  const [account, setAccount] = useState('');
  const [pressStart, setPressStart] = useState(false);

  useEffect(()=>{
      if(typeof window.ethereum != "undefined"){
          try{
              const web = new Web3(window.ethereum);
              setWeb3(web);
          }catch(err){
              console.log(err);
          }
      }
      getProfile();
  },[])

  //메타마스크연결
  const connectWallet = async()=>{
      const accounts = await window.ethereum.request({
          method : "eth_requestAccounts",
      })
      setAccount(accounts[0]);
      setPressStart(true);
  }

  
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="Profile_All"> 
    
      <div className="Profile_div" style={{backgroundImage: `url(${profileImage})`}}>
      <br/>
      <Link to="https://hong-car.netlify.app/" className="Profile_HomeIcon"><HomeIcon /></Link>
      </div>
      <div className="Profile_UserInfo">
        
      <img className="Profile_Image" src={profileImage}></img>    
          <div  >
            
                
                <h2> &nbsp;&nbsp;{nickName}</h2>
           
                <div  className = "Profile_Wallet_All" >
                {pressStart ?  
                <button className = "Profile_Wallet" > MetaMask<LockOpenIcon /></button> :
                <button className = "Profile_Wallet" 
                        onClick={()=>{connectWallet();}} >
                        MetaMask <LockIcon />
                </button>}
                <hr/>
                </div>
                <div className="Profile_shop" >
                 
                  <Link to="https://hong-car.netlify.app/Shopping" className="Profile_Shopping"  >
                    Go Shopping
                  </Link >
                  
                 <Link to={KAKAO_LOGOUT_URL} className="Profile_logout">LogOut</Link>
                </div>
          </div>
      </div>
      
    </div>
  );
};

export default Profile;