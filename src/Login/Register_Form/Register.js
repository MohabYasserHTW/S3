import React from 'react'
import RegisterForm from './RegisterForm'


export default function Register({userName,password,setUserName,setpassword,handleRegister,users}) {
  return (
    <div className='Login'>
        <RegisterForm
        users={users}
        userName={userName} 
        password={password}
        setUserName={setUserName}
        setpassword={setpassword}
        handleRegister={handleRegister}
        />
    </div>
  )
}
