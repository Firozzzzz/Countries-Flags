import React, { useEffect, useState } from 'react'
import './ApiConnection.css'
import logo from '../logo.svg'

function ApiConnection() {
    const [countries,setContries]=useState([])
    const [selected,setSelected]=useState()
    useEffect(()=>{
        fetch('https://countriesnow.space/api/v0.1/countries/currency',{
            method: 'GET',
          
        })
        .then((response)=>response.json())
        .then((res)=>{
            console.log(res)
            setContries(res.data)
        })

    },[])
    const loadFlag=(country)=>{
      fetch('https://countriesnow.space/api/v0.1/countries/flag/images',{
        method:'POST',
        headers:{
          'content-Type':'application/json'
        },
        body:JSON.stringify({
          "iso2":country.iso2
        })
      }).then((response)=>response.json())
      .then(res=>{
        setSelected(res?.data)
      })
      
    }
  return (
    <><div className='container'>
        {countries.map((cnty,index)=><div className='country-list' key={index} onClick={()=>loadFlag(cnty)}>{cnty.name}</div>)}
      </div>

     { selected?.flag && <div className='flag-container'onClick={()=>setSelected({})}>
      <img src={selected?.flag} alt="" height={'200px'}/>
      
      {selected.name}
      
      </div>}
    
    </>
  )
}

export default ApiConnection