import React, { useEffect } from 'react'

function Button({label,heading,color}) {
  useEffect(()=>{
  console.log('button mount')
  return()=>{
   console.log('return')
}
  },[])


  console.log('button')
  return (
    <>
    <button>{label ? label : 'default'}
    
    </button><div style={{backgroundColor:color}}>{heading?? 'no heading'}</div>
    </>
  )
}

export default Button

// if(props.label){
//   a=props.label
// }
// else{
//   a='default'
// } 