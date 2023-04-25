import React,{useState, useEffect} from 'react';
import './CSS/MyContract.css';
import Abi from '../Abi';
import Web3 from "web3";
import { Link } from 'react-router-dom';



const MyContract =({Contractfiltered})=>{
    const [web3, setWeb3] = useState();
    const [info, setInfo] = useState();
    const [mykakaoUserId, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const [kakaoUserId, setkakaoUserId] = useState();
    const [userCarName, setUserCarName] = useState();
    const [userCarCost, setUserCarCost] = useState();
    const [userName, setUserName] = useState();
    const [userText, setUserText] = useState();
    const [contractFilter, setContractFilter] = useState();

    
    // 카카오톡API 에서  UserId를 가져와 setUserId에 저장
    // 중고차 거래 계약서 렌더링 시 true 비교에 사용
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

      // 컴포넌트 렌더링 시 작업 실행.
      // 맨 마지막줄 getProfile(); 로 카카오톡 userid를 가져옴
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



    // remix에서 구매하기 시 보내졌던 정보를 가져옴
    const GetContractInfo = async()=>{
      const ContractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
      const addInfo = await new web3.eth.Contract(Abi,ContractAddress);

      // 가져온 정보를 infos에 저장
      // setInfo에 저장하여 info로 filter를 사용하려고 했으나 filter에러 발생
      // 바로 infos로 filter 실행
      let infos = await addInfo.methods.getMyInfo().call();
      setInfo(infos); // 사용은 안하지만 일단 넣어놓음.


      // getinfo 안 필터링
      // infos 안에서 contractInput에 입력한 단어가 포함된 배열을 Contractfiltered에 저장
      // Contractfiltered 를 setContractFilter에 저장하여 useState에 사용
      const Contractfiltered = infos.filter((con) => {
        return con.kakaoUserId.toUpperCase().includes(contractInput.toUpperCase())
        
      });
      setContractFilter(Contractfiltered)

      {Contractfiltered && Contractfiltered.map((conInfo)=>{
        <div Contractfiltered={Contractfiltered} >
        <b> {conInfo.kakaoUserId} <br/> 
            {conInfo.carName} <br/>
            {conInfo.carcost} <br/>
            {conInfo.username} <br/>
            {conInfo.userText} 
            </b>
        </div>
        // setContractInfo([conInfo, ...conInfo])
        
        setkakaoUserId(conInfo.kakaoUserId);
        setUserCarName(conInfo.carName);
        setUserCarCost(conInfo.carcost);
        setUserName(conInfo.username);
        setUserText(conInfo.userText);
       
        })}
     };
     // 렌더링 되면서 GetContractInfo 한번 실행
     window.onload=function(){
      GetContractInfo();
     }
     
    // input 입력 값 저장
    const [contractInput, setContractInput] = useState('');
    const contractInputValue = (e) => {
        setContractInput(e.target.value.toUpperCase())
    };

    return(
        <div>
          <div className='MyContract_All'>
              
                <div className="Shopping_Header"> 
                    <h3><Link to="https://hong-car.netlify.app/" className='Shopping_Home'> Hong Car </Link></h3>     
                </div>

                <div className='MyContract_Input'>
                    <input onChange={contractInputValue} placeholder="search" className='MyContract_searchbar'/> 
                    <button onClick={GetContractInfo} className = "MyContract_btnlist">List Up</button>
                </div>

                <div className='MyContract_Body'>

                      <div className='MyContract_All'>
                          {contractInput == kakaoUserId ?
                          contractFilter && contractFilter.map((conInfo)=>{
                          return(

                          <div className='MyContract_Card_Div'>
                              <div className='MyContract_Card'>
                                  <div className='MyContract_UserId'>
                                       <b> {conInfo.kakaoUserId} </b> <br/> 
                                  </div>

                                  <div className='MyContract_Company'>
                                      <div className='MyContract_Company_name'> <b>Hong Car</b></div>  
                                      <div className='MyContract_Company_Cnum'><b>1111-111111</b></div>
                                  </div>

                                  <div className='MyContract_Company_PhonNum'><b>000-0000-0000</b></div>
                                  
                                  <div className='MyContract_UserName'>
                                      <b> {conInfo.username} </b> <br/>
                                  </div>
                                  
                                  <div className='MyContract_UserText'>
                                      <b> {conInfo.userText} </b> <br/>
                                  </div>
                                  
                                  <div className='MyContract_UserCarName'>
                                      <b> {conInfo.carName}  </b> <br/>
                                  </div>
                                  
                                  <div className='MyContract_UserCarCost'>
                                      <b> {conInfo.carcost} ETH</b> <br/>
                                  </div>

                              </div>
                          </div>
                          )}) : null}
                      </div>

                </div>
          </div>
      </div> 
    )
};

export default MyContract;