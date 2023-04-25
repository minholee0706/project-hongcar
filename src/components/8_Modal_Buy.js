import React from 'react';
import { useState, useEffect } from 'react';
import Abi from '../Abi';
import Web3 from "web3";
import Modal from 'react-modal';
import './CSS/Modal_Buy.css';


const Modal_Buy = ({title, carName, subName, carcost}) => {
    const [web3, setWeb3] = useState('');
    const [account, setAccount] = useState('');
    const [username, setUserName] = useState("");
    const [userText, setUserText] = useState("");
    const [str, setStr] = useState();
    const [ethers, setEthers] = useState(false);
    const [kakaoUserId, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const [modal, setModal] = useState(false); // 모달 스위치

    const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      // 사용자 정보 변수에 저장
      setUserId(String(data.id));
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

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
      },[]);
    
    //이더보내기
    const SendEth = async(e)=>{
      
            const accounts = await window.ethereum.request({
                method : "eth_requestAccounts",
            })
            setAccount(accounts[0]);
            await web3.eth.sendTransaction({
                from : account,
                to : process.env.REACT_APP_TO_ADDRESS,
                value : web3.utils.toWei(String(carcost),"ether")
            }).then(function(receipt){
                
            });
            e.preventDefault(); //새로고침 안하도록
        console.log(kakaoUserId);
        console.log(carName);
        console.log(carcost);
        console.log(username);
        console.log(userText);
        
        //metamask
        const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS; 
        const Contract = await new web3.eth.Contract(Abi, ContractAddress);
        
        Contract.methods.addInfo(kakaoUserId, carName, carcost, username, userText, false).send({from : account}).on(
            "receipt", (receipt) => {
                setStr("구매해주셔서 감사합니다. \n MyContract에서 계약서를 확인하세요.");
            }
        )
        setEthers(true);
       
    }

    

  return (
    <div id="modal">
            <button onClick={()=> {setModal(true)}} className='Shopping_Card_button' modal={modal}> Buy </button>
            { modal && 
            <Modal isOpen={true} className='Shopping_modal' > 
                <div className='modal_TEXT'>Please enter correct information. <br/>UserId는 계약서 확인 시 필요한 정보입니다. </div>
                <div className='modal_info'>
                  <b> UserId : </b>{kakaoUserId}  <b style={{color : "red"}}>공백 시 재접속 해주세요.</b><br/>
                  <b> 브랜드 :</b> {title} <br/>
                  <b> 기종 : </b> {carName} / {subName} <br />
                  <b> 가격 : </b> {carcost} ETH
                </div>
                <button onClick={()=> setModal(false)} className="modal_close_Button" >X</button>
                
                <div className='modal_UserInfo'>
                    <input className="modal_UserInfo_UserName" name="username" placeholder = "구매자 성함" onChange={e=> setUserName(e.target.value)} userName={username}/>
                    <input className="modal_UserInfo_UserPhone" name="userText" placeholder = "구매자 연락처" onChange={e=> setUserText(e.target.value)} userText={userText}/>
                </div>
                <button onClick={SendEth} className='Shopping_Button' > 제출하기 </button> 
                {ethers ==true ? str : null}
                

            </Modal>
             }
            </div>
            
  );
};

export default Modal_Buy;