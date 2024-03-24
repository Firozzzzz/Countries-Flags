import React,{useEffect, useState} from 'react'
import './NewPage.css'
import Button from './Button'
import { useSyncExternalStore } from 'react'


function NewPage() {
   
  const [value,setValue]=useState(1)
  const [open,setOpen]=useState(false)
  const [countries,setCountries]=useState([])
  
  useEffect(()=>{
    setTimeout(()=>{setCountries([{name:'usa',id:1},{name:'india',id:2},{name:'uk',id:3}])},2000)
  },[])
  const allStates={
    1:[{name:'la',id:11},{name:'ny',id:12},{name:'lv',id:13}],
    2:[{name:'kl',id:21},{name:'tn',id:22},{name:'ap',id:23}],
    3:[{name:'el',id:31},{name:'sl',id:32},{name:'il',id:33}]
  }
  const [states,setStates]=useState([])

  const handleClick=()=>{
  setValue(value + 1)
}
  const selectedCountry=(e)=>{
    setStates(allStates[e.target.value])
  }
  return (
    <>

    <div className='newPage'>value : {value}</div>
    
    {open ?<span onClick={handleClick}>
     <Button label={"add"}color={'yellowgreen'}/>
     </span> :'open false'}
   
    <select name="" id=""onChange={selectedCountry}>
      {countries.map((element,index)=>{

      return <option value={element.id} key={index}>{element.name}</option>
      })}
      
      
    </select>

    <select name="" id="">
     {states.map((element,index)=> <option value={element.id} key={index}>{element.name}</option>)}
    </select>

    <button onClick={()=>setOpen(!open)}>open/close</button>
    </>  
   
  )
}

export default NewPage