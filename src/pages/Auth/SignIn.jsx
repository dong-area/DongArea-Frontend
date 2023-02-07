import axios from 'axios'
import React, { useState } from "react";

//로그인
const SignIn = () => {
    const [Id, setId] = useState('')
    const [Pw, setPw] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('/login', {
            id: Id,
            password: Pw
        })
            .then((res, req) => {
                //token
                console.log(res)
                alert('로그인 성공')
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input className="id" placeholder="Id" value={Id} onChange={(e) => setId(e.target.value)} />
                <input className="password" placeholder="비밀번호" value={Pw} onChange={(e) => setPw(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default SignIn;