import React from "react";
import axios from 'axios';
import BaseAxios from "../utils/BaseAxios";

const MyInfo = (props) => {

  BaseAxios.get('/authed/user/userinfo',{
    headers : {
      Authorization : props.Token
    }
  })
  .then((res,req)=>{
    console.log(res)
  })

  return (
    <>
      <div>MyInfo</div>
    </>
  );
};

export default MyInfo;
