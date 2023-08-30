import React from 'react'
import LoginForm from './Login_Form'

export default function Login({userName,password,setUserName,setpassword,handleLogin}) {
  return (
    <div className='Login'>
        <LoginForm 
          userName={userName} 
          password={password}
          setUserName={setUserName}
          setpassword={setpassword}
          handleLogin={handleLogin}
        />
    </div>
  )
}
