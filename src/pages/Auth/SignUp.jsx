import axios from 'axios'
import React, { useState } from "react";

//회원가입
const SignUp = () => {
    const [Id,setId] = useState('')
    const [Pw,setPw] = useState('')
    const [Name,setName] = useState('')
    const [Club,setClub] = useState('')
    const [ClassNumber,setClassNumber] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        axios.post('http://10.80.161.163:8080/auth/join',{
            id:Id,
            password:Pw,
            username:Name,
            stu_id:ClassNumber
            })
        .then((res,req)=>{
            //token
            console.log(res)
            alert('계정 생성 성공')
        })
        .catch((error)=>{
            console.error(error)
        })
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input className="id" placeholder="Id" value={Id} onChange={(e)=>setId(e.target.value)}/>
                <input className="password" placeholder="비밀번호" value={Pw} onChange={(e)=>setPw(e.target.value)}/>
                <input className="name" placeholder="이름" value={Name} onChange={(e)=>setName(e.target.value)}/>
                <input className="club" placeholder="동아리" value={Club} onChange={(e)=>setClub(e.target.value)}/>
                <input className="class" placeholder="학번" value={ClassNumber} onChange={(e)=>setClassNumber(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;