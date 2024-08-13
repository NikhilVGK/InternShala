import React,{useState} from 'react'
import SignIn from './SignIn';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import SignIn2 from "../employer/SignIn2"


const Options = () => {
const [signinJob,setSigninJob] = useState(false);
const [signinEmp, setSigninEmp] = useState(false);
const [btn, setBtn] = useState(true);


const signInJob = ()=>{
    setSigninJob(true)
    setSigninEmp(false)
    setBtn(false)
}

const signInEmp = () => {
  setSigninJob(false)
    setSigninEmp(true)
    setBtn(false)
}
  return (
    <div>
     <div className='header'>
      <div className='heading'>Internshala </div>
      <div className='icon'><HomeRoundedIcon fontSize="x-large"/></div>
     </div>
    { btn && <p className='home-quote' >"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt.</p> }
    { btn &&  <div className='home-option' > <div>Tell us who are you</div> <div><ExpandCircleDownRoundedIcon fontSize='medium' /></div></div> }
     <div>{signinJob && <SignIn/>}</div>
     <div>{signinEmp&& <SignIn2/>}</div>
      <div className='options-container'>
        {btn&&<button onClick={ signInEmp} className='options-btn'>Employer</button>}
       {btn&&<button onClick={ signInJob} className='options-btn'>Job Seeker</button>}  
      </div>
      
    </div>
  )
}

export default Options
