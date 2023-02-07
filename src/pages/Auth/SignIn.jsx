import axios from 'axios'

//로그인
const SignIn = () => {
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
                <input className="id" placeholder="Id"/>
                <input className="password" placeholder="비밀번호"/>
                <button type="submit">Sign In</button>
            </form>
        </>
    )
}

export default SignIn;