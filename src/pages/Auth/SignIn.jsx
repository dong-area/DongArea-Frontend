import axios from 'axios'
import React, { useState } from "react";

//로그인
const SignIn = () => {
    const [Id,setId] = useState('')
    const [Pw,setPw] = useState('')

    const onSubmit = () => {
        axios.post('링크',{
            //id, password
        })
        .then((res,req)=>{
            //token
            alert('로그인 성공')
        })
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input className="id" placeholder="Id" value={Id} onChange={(e)=>setId(e.target.value)}/>
                <input className="password" placeholder="비밀번호" value={Pw} onChange={(e)=>setPw(e.target.value)}/>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default SignIn;