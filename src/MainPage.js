import {useNavigate} from "react-router";

const MainPage = () => {
  const navigate = useNavigate();
  return(
    <div>
      <h1>main</h1>
      <button onClick={()=>{navigate('/signin')}}>
        로그인하러가기
      </button>
    </div>
  )
}

export default MainPage