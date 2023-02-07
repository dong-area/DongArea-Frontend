import axios from 'axios'

//회원가입
const SignUp = () => {
    const onSubmit = () => {
        axios.post('링크',{
            //data
        })
        .then((res,req)=>{
            //token
            alert('계정 생성 성공')
        })
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <input className="id" placeholder="Id"/>
                <input className="password" placeholder="비밀번호"/>
                <input className="name" placeholder="이름"/>
                <input className="club" placeholder="동아리"/>
                <input className="class" placeholder="반"/>
                <input className="number" placeholder="번호"/>
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;