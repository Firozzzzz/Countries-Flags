import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFoundPage() {
    const navigate=useNavigate()
    function doLogin(){
        setTimeout(()=>{
            navigate('/home')

        },3000)
    }
  return (
    <>
    <div>NotFoundPage</div>
    <button onClick={doLogin}>Login</button>
    <Link to='/home'>click here</Link>
    </>
  )
}

export default NotFoundPage