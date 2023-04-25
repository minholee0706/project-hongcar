import './CSS/ShopList.css';
import React,{useState} from "react";
import Modal_Buy from './8_Modal_Buy';
import { Link } from 'react-router-dom';


//-----현대 img import ------------------
import sonata from './IMAGE/sonata.png';
import grandeur from './IMAGE/grandeur.png';
import avante from './IMAGE/avante.png';
import porter2 from './IMAGE/porter2.png';
import palisade from './IMAGE/palisade.png';
import tucson from './IMAGE/tucson.png';
import santafe from './IMAGE/santafe.png';
import staria from './IMAGE/staria.png';
import casper from './IMAGE/casper.png';
import ioniq5 from './IMAGE/ioniq5.png';
import ioniq6 from './IMAGE/ioniq6.png';
import venue from './IMAGE/venue.png';
import kona from './IMAGE/kona.png';
//---------제네시스------------------------
import g70 from './IMAGE/g70.png';
import g80 from './IMAGE/g80.png';
import gv80 from './IMAGE/gv80.png';
import g90 from './IMAGE/g90.png';
//----------bmw--------------------------
import BMW3Series from './IMAGE/BMW3Series.png';
import BMW5Series from './IMAGE/BMW5Series.png';
import x1 from './IMAGE/x1.png';
import x2 from './IMAGE/x2.png';
import x3 from './IMAGE/x3.png';
import x4 from './IMAGE/x4.png';
import x5 from './IMAGE/x5.png';
import x6 from './IMAGE/x6.png';
import x6m from './IMAGE/x6m.png';
import newx7 from './IMAGE/newx7.png';
import ix3 from './IMAGE/ix3.png';
import i7 from './IMAGE/i7.png';
//------------benz-----------------------
import sclass from './IMAGE/Sclass.png';
import maybach from './IMAGE/maybach.png';
import amggt from './IMAGE/amggt.png';
import newcclass from './IMAGE/newCclass.png';
import gleclass from './IMAGE/gleclass.png';
import eqssuv from './IMAGE/eqssuv.png';
//------------쉐보레---------------------
import trailblazer from './IMAGE/trailblazer.png';
import spark from './IMAGE/spark.png';
import malibu from './IMAGE/malibu.png';
import colorado from './IMAGE/colorado.png';
import traverse from './IMAGE/traverse.png';
import equinox from './IMAGE/equinox.png';
//--------------볼보-----------------------
import s90 from './IMAGE/s90.png';
import xc60 from './IMAGE/xc60.png';
import xc90 from './IMAGE/xc90.png';
import s60 from './IMAGE/s60.png';
import xc40 from './IMAGE/xc40.png';
//----------폭스바겐------------------------
import tiguan from './IMAGE/tiguan.png';
import golf from './IMAGE/golf.png';
import touareg from './IMAGE/touareg.png';
//----------포드----------------------------
import explorer from './IMAGE/explorer.png';
import mustang from './IMAGE/mustang.png';
import bronco from './IMAGE/bronco.png';
import ranger from './IMAGE/ranger.png';
import expedition from './IMAGE/expedition.png';
import mustangmache from './IMAGE/mustangmach-e.png';



const ShopList=({kakaoUserId})=>{

    // 매핑에 사용되는 배열 ( 차 정보 )
      const ShopArray = [
        //---------------------현대-------------------------------------
        // 소나타
        {
            title : "HUNDAI",
            CarName : "Sonata (8th generation)",
            subName : "현대 소나타 (8세대)",
            information : ' 연료 : 가솔린, LPG \n 외장 : 세단(중형) \n 배기량 : 1,598 ~ 2,497cc \n 연비 : 10.2 ~ 13.8km/l \n 정원 : 5', 
            cost : '0.00000111',
            carimg : sonata
        },
        // 올 뉴 그랜져
        {
            title : "HUNDAI",
            CarName : "All-New Grandeur",
            subName : "현대 올뉴 그랜져",
            information : ' 연료 : 가솔린 + 전기 \n 외장 : 세단(대형) \n 배기량 : ~ 3,470cc \n 연비 : ~ 11.7km/l \n 정원 : 5 ',
            cost : '0.00000112',
            carimg : grandeur   
        },
        // 올 뉴 아반떼
        {
            title : "HUNDAI",
            CarName : "All-New Avante CN7",
            subName : "현대 올뉴 아반떼 CN7",
            information : ' 연료 : 가솔린 + 전기 \n 외장 : 세단(준중형) \n 배기량 : 1,580 ~ 1,598cc \n 연비 : 10.5 ~ 21.1km/l \n 정원 : 5',
            cost : '0.00000113',
            carimg : avante
        },
        // 포터 2
        {
            title : "HUNDAI",
            CarName : "Porter2",
            subName : "현대 포터2",
            information : ' 연료 : 디젤, 전기(배터리) \n 외장 : 소형트럭 \n 배기량 : 2,497cc \n 복합연비 : 8.5 ~ 9.9km/l   복합 전비 : 2.7 ~ 3.1km/kWh \n 총 주행거리 : 117 ~ 211Km \n 배터리 용량 : 58.8kWh   정원 : 5 ~',
            cost : '0.00000114',
            carimg : porter2
        },
        // 펠리셰이드
        {
            title : "HUNDAI",
            CarName : "PALISADE",
            subName : "현대 팰리세이드",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 대형SUV \n 배기량 : 2,199 ~ 3,778cc \n 복합연비 : 8.5 ~ 12.4km/l \n 정원 : 5~',
            cost : '0.00000115',
            carimg : palisade
        },
        //  투싼 
        {
            title : "HUNDAI",
            CarName : "TUCSON",
            subName : "현대 투싼",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,598 ~ 1,998cc \n 복합연비 : 11.0 ~ 16.2km/l \n 정원 : 5~',
            cost : '0.00000116',
            carimg : tucson
        },
        //  산타페 
        {
            title : "HUNDAI",
            CarName : "SANTA FE",
            subName : "현대 싼타페",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,598 ~ 2,497cc \n 복합연비 : 9.5 ~ 15.3km/l \n 정원 : 5~',
            cost : '0.00000117',
            carimg : santafe
         },
        //  스타리아 
        {
            title : "HUNDAI",
            CarName : "STARIA",
            subName : "현대 스타리아",
            information : ' 연료 : LPG, 디젤 \n 외장 : 대형MPV \n 배기량 : 2,199 ~ 3,470cc \n 복합연비 : 6.3 ~ 12.3km/l \n 정원 : 5~',
            cost : '0.00000118',
            carimg : staria
        },
        //  캐스퍼 
        {
            title : "HUNDAI",
            CarName : "CASPER",
            subName : "현대 캐스퍼",
            information : ' 연료 : 가솔린 \n 외장 : 경차 \n 배기량 : 998cc \n 복합연비 : 12.3 ~ 14.3km/l \n 정원 : 5~',
            cost : '0.00000119',
            carimg : casper
        },
        //  아이오닉5 
        {
            title : "HUNDAI",
            CarName : "IONIQ 5",
            subName : "현대 아이오닉5",
            information : ' 연료 : 전기(배터리) \n 외장 : 중형SUV \n 복합전비 4.5~5.2㎞/kWh \n 총주행거리 : 319~458Km \n 배터리 용량 58~77.4kWh \n 정원 : 5~',
            cost : '0.00000120',
            carimg : ioniq5
        },
        //  아이오닉6 
        {
            title : "HUNDAI",
            CarName : "IONIQ 6",
            subName : "현대 아이오닉6",
            information : ' 연료 : 전기(배터리) \n 외장 : 중형 \n 복합전비 5.5~6.2㎞/kWh \n 총주행거리 : 367~524Km \n 배터리 용량 53.0~77.4kWh \n 정원 : 5~',
            cost : '0.00000121',
            carimg : ioniq6
        },

        //  베뉴 
        {
            title : "HUNDAI",
            CarName : "VENUE",
            subName : "현대 베뉴",
            information : ' 연료 : 가솔린 \n 외장 : 소형SUV \n 배기량 : 1,598cc \n 복합연비 13.3~13.7㎞/ℓ \n 정원 : 5~',
            cost : '0.00000122',
            carimg : venue
        },
        //  코나 
        {
            title : "HUNDAI",
            CarName : "KONA",
            subName : "현대 코나",
            information : ' 연료 :가솔린, 가솔린+전기 \n 외장 : 소형SUV \n 배기량 : 1,580 ~ 1,999cc \n 복합연비 11.6 ~ 19.3㎞/ℓ \n 정원 : 5~',
            cost : '0.00000123',
            carimg : kona
        },
        // 제네시스 G70
        {
            title : "HUNDAI",
            CarName : "Genesis G70",
            subName : "현대 제네시스 G70",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 세단(중형) \n 배기량 : 1,998 ~ 3,342cc \n 연비 : 8.9 ~ 14.9km/l \n 정원 : 5',
            cost : '0.00000124',
            carimg : g70
        },
        // 제네시스 G80
        {
            title : "HUNDAI",
            CarName : "Genesis G80",
            subName : "현대 제네시스 G80",
            information : ' 연료 : 가솔린, 디젤, 전기(배터리) \n 외장 : 세단(준대형) \n 배기량 : 2,151 ~ 3,470cc \n 복합연비 : 8.3 ~ 14.6km/l   복합전비 : 4.3km/kWh \n 총주행거리 : 427Km \n 배터리 용량 : 87.2kWh  정원 : 5',
            cost : '0.00000125',
            carimg : g80
        },
        // 제네시스 G90
        {
            title : "HUNDAI",
            CarName : "Genesis G90",
            subName : "현대 제네시스 G90",
            information : ' 연료 : 가솔린 \n 외장 : 세단(대형) \n 배기량 : ~ 3,470cc \n 복합연비 : 8.2 ~ 9.3km/l \n 정원 : 5',
            cost : '0.00000126',
            carimg : g90
        },
        // 제네시스 GV80
        {
            title : "HUNDAI",
            CarName : "Genesis GV80",
            subName : "현대 제네시스 GV80",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 대형SUV \n 배기량 : 2,497 ~ 3,470cc \n 복합연비 : 7.8 ~ 11.8km/l \n 정원 : 5~7',
            cost : '0.00000127',
            carimg : gv80
        },
        //------------------------------------------------------------------------------------------------------------------------------

        //-----------------------------BMW----------------------------------------------------------------------------------------------
        // 5시리즈
        {
            title : "BMW",
            CarName : "5 Series",
            subName : "5 시리즈",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 준대형 \n 배기량 : 1,995 ~ 4,395cc \n 복합연비 : 7.9 ~ 17.5km/l \n 총 주행거리 : 45 ~ 99km \n 배터리 용량 : 12.0kWh   정원 : 5',
            cost : '0.00000128',
            carimg : BMW5Series
        },
        // 3시리즈
        {
            title : "BMW",
            CarName : "3 Series",
            subName : "3 시리즈",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 중형 \n 배기량 : 1,995 ~ 2,998cc \n 복합연비 : 9.6 ~ 15.7km/l \n 총 주행거리 : 41km \n 배터리 용량 : 12.0kWh    정원 : 5',
            cost : '0.00000129',
            carimg : BMW3Series
        },
        // X1
        {
            title : "BMW",
            CarName : "X1",
            subName : "X1",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 소형SUV \n 배기량 : 1,995 ~ 1,998cc \n 복합연비 : 9.8 ~ 13.3km/l \n 정원 : 5~',
            cost : '0.00000130',
            carimg : x1
        },
        // X2
        {
            title : "BMW",
            CarName : "X2",
            subName : "X2",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 소형SUV \n 배기량 : 1,995 ~ 1,998cc \n 복합연비 : 9.8 ~ 14.2km/l \n 정원 : 5~',
            cost : '0.00000131',
            carimg : x2
        },
        // X3
        {
            title : "BMW",
            CarName : "X3",
            subName : "X3",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,995 ~ 2,998cc \n 복합연비 : 9.2 ~ 12.2km/l    복합전비 : 2.6km/kWh \n 총 주행거리 : 34km \n 배터리 용량 : 12.0kWh   정원 : 5~',
            cost : '0.00000132',
            carimg : x3
        },
        // X4
        {
            title : "BMW",
            CarName : "X4",
            subName : "X4",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,995 ~ 2,998cc \n 복합연비 : 8.5 ~ 12.3km/l \n  정원 : 5~',
            cost : '0.00000133',
            carimg : x4
        },
        // X5
        {
            title : "BMW",
            CarName : "X5",
            subName : "X5",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 대형SUV \n 배기량 : 2,993 ~ 4,395cc \n 복합연비 : 6.6 ~ 11.3km/l \n 총 주행거리 : 54km \n 배터리 용량 : 24kWh   정원 : 5~',
            cost : '0.00000134',
            carimg : x5
        },
        // X6
        {
            title : "BMW",
            CarName : "X6",
            subName : "X6",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 대형SUV \n 배기량 : 2,993 ~ 4,395cc \n 복합연비 : 6.6 ~ 11.3km/l \n 총 주행거리 : 54km \n 배터리 용량 : 24kWh   정원 : 5~',
            cost : '0.00000135',
            carimg : x6
        },
        // X6 M
        {
            title : "BMW",
            CarName : "X6 M",
            subName : "X6 M",
            information : ' 연료 : 가솔린 \n 외장 : 대형SUV \n 배기량 : ~ 4,395cc \n 복합연비 : 6.8km/l \n 정원 : 5~',
            cost : '0.00000136',
            carimg : x6m
        },
        // NEW X7
        {
            title : "BMW",
            CarName : "New X7",
            subName : "뉴 X7",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 대형SUV \n 배기량 : 2,993 ~ 4,395cc \n 복합연비 : 6.9 ~ 10.0km/l \n 정원 : 5~',
            cost : '0.00000137',
            carimg : newx7
        },
        // IX3
        {
            title : "BMW",
            CarName : "iX3",
            subName : "iX3",
            information : ' 연료 : 전기(배터리) \n 외장 : 중형SUV \n 복합 전비 : 4.1km/kWh \n 총 주행거리 : 344Km \n 배터리 용량 : 74kWh   정원 : 5~',
            cost : '0.00000138',
            carimg : ix3
        },
        // I7
        {
            title : "BMW",
            CarName : "i7",
            subName : "i7",
            information : ' 연료 : 전기(배터리) \n 외장 : 대형 \n 복합 전비 : 3.7km/kWh \n 총 주행거리 : 438Km \n 배터리 용량 : 105.7kWh   정원 : 5~',
            cost : '0.00000139',
            carimg : i7
        },
        //----------------------------------------------------------------------------------------------------------------------------------

        //------BENZ------------------------------------------------------------------------------------------------------------------------
        // S CLASS
        {
            title : "BENZ",
            CarName : "S-Class",
            subName : "메르세데즈 벤츠 S-클래스",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 대형 \n 배기량 : 2,925 ~ 3,982cc \n 복합연비 : 7.5 ~ 12km/l \n 정원 : 5~',
            cost : '0.00000140',
            carimg : sclass
        },
        // 마이바흐
        {
            title : "BENZ",
            CarName : "Maybach",
            subName : "메르세데즈 벤츠 마이바흐",
            information : ' 연료 : 가솔린 \n 외장 : 대형 \n 배기량 : 3,982 ~ 5,980cc \n 복합연비 : 5.9 ~ 8.1km/l \n 정원 : 5~',
            cost : '0.00000141',
            carimg : maybach
        },
        // AMG_GT
        {
            title : "BENZ",
            CarName : "AMG GT",
            subName : "메르세데즈 벤츠 AMG GT",
            information : ' 연료 : 가솔린 \n 외장 : 스포츠카 \n 배기량 : 2,999 ~ 3,982cc \n 복합연비 : 7.0 ~ 8.2km/l \n 정원 : 5~',
            cost : '0.00000142',
            carimg : amggt
        },
        // 더 뉴 C CLASS
        {
            title : "BENZ",
            CarName : "The New C-Class",
            subName : "메르세데즈 벤츠 더 뉴 C-클래스",
            information : ' 연료 : 가솔린 \n 외장 : 중형 \n 배기량 : 1,999cc ~  \n 복합연비 : 11.2 ~ 11.8km/l \n 정원 : 5',
            cost : '0.00000143',
            carimg : newcclass
        },
        // GLE-CLASS
        {
            title : "BENZ",
            CarName : "GLE-Class",
            subName : "메르세데즈 벤츠 GLE-클래스",
            information : ' 연료 : 가솔린,가솔린 + 전기, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,950 ~ 3,982cc \n 복합연비 : 7.0 ~ 12.4km/l   복합 전비 : 2.3 ~ 2.7km/kWh \n 총 주행거리 : 25~29km \n 배터리 용량 : 13.5 ~ 90kWh   정원 : 5~',
            cost : '0.00000144',
            carimg : gleclass
        },
        // EQS SUV
        {
            title : "BENZ",
            CarName : "EQS SUV",
            subName : "메르세데즈 벤츠 EQS",
            information : ' 연료 : 전기(배터리) \n 외장 : 대형SUV \n 복합전비 : 3.5km/kWh \n 총 주행거리 : 447~459km \n 배터리 용량 : 107.1kWh \n 정원 : 5 ~',
            cost : '0.00000145',
            carimg : eqssuv
        },
        //----------------------------------------------------------------------------------------------------------------------------------

        //------쉐보레------------------------------------------------------------------------------------------------------------------------
        // 트레일 블레이저
        {
            title : "Chevrolet",
            CarName : "Trailblazer",
            subName : "쉐보레 트레일블레이저",
            information : ' 연료 : 가솔린 \n 외장 : 소형SUV \n 배기량 : 1,199 ~ 1,341cc \n 복합연비 : 11.6 ~ 13.2㎞/ℓ \n 정원 : 5',
            cost : '0.00000146',
            carimg : trailblazer
        },
        // 스파크
        {
            title : "Chevrolet",
            CarName : "Spark",
            subName : "쉐보레 스파크",
            information : ' 연료 : 가솔린 \n 외장 : 경차 \n 배기량 : 999cc \n 복합연비 : 14.4 ~ 15.0㎞/ℓ \n 정원 : 5',
            cost : '0.00000147',
            carimg : spark
        },
        // 말리부
        {
            title : "Chevrolet",
            CarName : "Malibu",
            subName : "쉐보레 말리부",
            information : ' 연료 : 가솔린, 가솔린+전기, 디젤 \n 외장 : 중형 \n 배기량 : 1,341 ~ 1,998cc \n 복합연비 : 10.8 ~ 17.1㎞/ℓ \n 정원 : 5',
            cost : '0.00000148',
            carimg : malibu
        },
        // 콜로라도
        {
            title : "Chevrolet",
            CarName : "Colorado",
            subName : "쉐보레 콜로라도",
            information : ' 연료 : 가솔린 \n 외장 : 픽업/밴 \n 배기량 : 3,649cc \n 복합연비 : 8.1 ~ 8.3㎞/ℓ \n 정원 : 5',
            cost : '0.00000149',
            carimg : colorado
        },
        // 트래버스
        {
            title : "Chevrolet",
            CarName : "Traverse",
            subName : "쉐보레 트래버스",
            information : ' 연료 : 가솔린 \n 외장 : 대형SUV \n 배기량 : 3,564cc \n 복합연비 : 8.3㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000150',
            carimg : traverse
        },
        // 이쿼녹스
        {
            title : "Chevrolet",
            CarName : "Equinox",
            subName : "쉐보레 이쿼녹스",
            information : ' 연료 : 가솔린 \n 외장 : 중형SUV \n 배기량 : 1,490cc \n 복합연비 : 10.6 ~ 11.5㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000151',
            carimg : equinox
        },
        
        //----------------------------------------------------------------------------------------------------------------------------------


        //------볼보------------------------------------------------------------------------------------------------------------------------
        // s90
        {
            title : "Volvo",
            CarName : "S90",
            subName : "볼보 S90",
            information : ' 연료 : 가솔린, 가솔린 + 전기 \n 외장 : 준대형 \n 배기량 : 1,969cc \n 복합연비 : 9.9 ~ 11.9㎞/ℓ \n 복합전비 : 2.9 ~ 3㎞/kWh \n 총주행거리 : 34 ~ 59Km   정원 : 5 ~',
            cost : '0.00000152',
            carimg : s90
        },
        // xc60
        {
            title : "Volvo",
            CarName : "XC60",
            subName : "볼보 XC60",
            information : ' 연료 : 가솔린, 가솔린 + 전기 \n 외장 : 중형SUV \n 배기량 : 1,969cc \n 복합연비 : 9.1 ~ 11.5㎞/ℓ \n 복합전비 : 3.0 ~ 3.3㎞/kWh \n 총주행거리 : 33 ~ 57Km   정원 : 5 ~',
            cost : '0.00000153',
            carimg : xc60
        },
        // xc90
        {
            title : "Volvo",
            CarName : "XC90",
            subName : "볼보 XC90",
            information : ' 연료 : 가솔린, 가솔린 + 전기, 디젤 \n 외장 : 대형SUV \n 배기량 : 1,969cc \n 복합연비 :9.3 ~ 11.0㎞/ℓ \n 복합전비 : 2.7 ~ 3.0㎞/kWh \n 총주행거리 : 30 ~ 53Km    정원 : 5~',
            cost : '0.00000154',
            carimg : xc90
        },
        //볼보 S60
        {
            title : "Volvo",
            CarName : "S60",
            subName : "볼보 S60",
            information : ' 연료 : 가솔린 \n 외장 : 중형 \n 배기량 : 1,969cc \n 복합연비 : 11.3㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000155',
            carimg : s60
        },
        //볼보 XC40
        {
            title : "Volvo",
            CarName : "XC40",
            subName : "볼보 XC40",
            information : ' 연료 : 가솔린 \n 외장 : 중형SUV \n 배기량 : 1,969cc \n 복합연비 : 10.1㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000156',
            carimg : xc40
        },
        //----------------------------------------------------------------------------------------------------------------------------------

        //------폭스바겐------------------------------------------------------------------------------------------------------------------------
        //폭스바겐 Tiguan
        {
            title : "Volkswagen",
            CarName : "Tiguan",
            subName : "폭스바겐 티구안",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 중형SUV \n 배기량 : 1,968 ~ 1,984cc \n 복합연비 : 10.1 ~ 15.6㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000157',
            carimg : tiguan
        },
        //폭스바겐 golf
        {
            title : "Volkswagen",
            CarName : "Golf",
            subName : "폭스바겐 골프",
            information : ' 연료 : 가솔린, 디젤 \n 외장 : 준중형 \n 배기량 : 1,968 ~ 1,984cc \n 복합연비 : 11.5 ~ 17.8㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000158',
            carimg : golf
        },
        //폭스바겐 The Touareg
        {
            title : "Volkswagen",
            CarName : "The Touareg",
            subName : "폭스바겐 투아렉",
            information : ' 연료 : 디젤 \n 외장 : 대형SUV \n 배기량 : 2,967cc \n 복합연비 : 10.8㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000159',
            carimg : touareg
        },
        //----------------------------------------------------------------------------------------------------------------------------------

        //------포드------------------------------------------------------------------------------------------------------------------------
        // 포드 Explorer
        {
            title : "Ford",
            CarName : "Explorer",
            subName : "포드 익스플로러",
            information : ' 연료 : 가솔린, 가솔린+전기 \n 외장 : 대형SUV \n 배기량 : 2,261 ~ 3,339cc \n 복합연비 : 8.3 ~ 10.4㎞/ℓ \n 복합전비 : 2.4㎞/kWh \n 총주행거리 : 30Km   정원 : 5 ~',
            cost : '0.00000160',
            carimg : explorer
        },
        // 포드 Mustang
        {
            title : "Ford",
            CarName : "Mustang",
            subName : "포드 머스탱",
            information : ' 연료 : 가솔린 \n 외장 : 스포츠카 \n 배기량 : 2,261 ~ 5,035cc \n 복합연비 : 7.5 ~ 9.4㎞/ℓ \n 정원 : 2',
            cost : '0.00000161',
            carimg : mustang
        },
        // 포드 Bronco
        {
            title : "Ford",
            CarName : "Bronco",
            subName : "포드 브롱코",
            information : ' 연료 : 가솔린 \n 외장 : 중형SUV \n 배기량 : 2,694 ~ 2,699cc \n 복합연비 : 8.2㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000162',
            carimg : bronco
        },
        // 포드 Ranger
        {
            title : "Ford",
            CarName : "Ranger",
            subName : "포드 레인저",
            information : ' 연료 : 디젤 \n 외장 : 픽업/밴 \n 배기량 : 1,996cc \n 복합연비 : 8.9 ~ 10.0㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000163',
            carimg : ranger
        },
        // 포드 Expedition
        {
            title : "Ford",
            CarName : "Expedition",
            subName : "포드 익스페디션",
            information : ' 연료 : 가솔린 \n 외장 : 대형SUV \n 배기량 : 3,496cc \n 복합연비 : 7.2㎞/ℓ \n 정원 : 5 ~',
            cost : '0.00000164',
            carimg : expedition
        },
        // 포드 Mustang Mach-E
        {
            title : "Ford",
            CarName : "Mustang Mach-E",
            subName : "포드 머스탱 마하-E",
            information : ' 포드의 첫번째 전동화 모델, 머스탱 마하-E \n 전기차 플랫폼 바탕으로 기본 821L의 넉넉한 트렁크 공간 \n 마세라티 르반떼, 포르쉐 마칸을 연상시키는 날렵한 쿠페라인',
            cost : '99.99999',
            carimg : mustangmache
        },
        //----------------------------------------------------------------------------------------------------------------------------------
    ];

    // 인풋 박스 안 입력 정보를 toUppercase로 대문자로 변형하여 setUserInput에 저장
    const [userInput, setUserInput] = useState('');
    const getValue = (e) => {
        setUserInput(e.target.value.toUpperCase())
    };
    
    // shoparray 안 필터링
    const filtered = ShopArray.filter((item) => {
        return item.title.toUpperCase().includes(userInput.toUpperCase()) || item.CarName.toUpperCase().includes(userInput.toUpperCase()) || item.subName.toUpperCase().includes(userInput.toUpperCase()) || item.information.toUpperCase().includes(userInput.toUpperCase())
    });  

    return(
    <div className='All_div'>
        
        <div className='Shopping_Car_All'>
                <br/>
            <div className='search_div'>
            <input onChange={getValue} placeholder="search" className='Shopping_searchbar'/>
            <Link to="https://hong-car.netlify.app/MyContract" className='Shopping_contract' ><button>My Contract</button></Link>
            </div>
            <div>
                {filtered && filtered.map((it)=>{
                    return(
                        <div className='Shopping_Card'>
                              <img className="Shopping_Car_Img" src={it.carimg} />
                                
                            <div className='Shopping_Car_Name'   > 
                               <b style={{fontSize:"x-large"}} >{it.title} <br/><hr/></b> {it.CarName}  <br/>{it.subName} 
                            </div>
                            <div className='shopping_infomation'>
                                Information<br/>
                                {it.information}
                                
                            </div>
                              
                                
                                
                                <hr/>
                        
                            <div className='Shopping_Card_button_total'>  
                            <div className='Shopping_Car_Cost'>
                                    <b>Cost </b><br/> <hr/>
                                    <b>{it.cost} ETH</b>
                                </div>
                                <Modal_Buy className='Shopping_Card_button' title={it.title} carName={it.CarName} subName={it.subName} carcost={it.cost} kakaoUserId={kakaoUserId}/>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>

    </div>
        
    );
}

export default ShopList;