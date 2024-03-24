import React, { useEffect, useRef, useState } from 'react'

function UseRef() {
    const ref = useRef(100)
    const inputRef = useRef()
    const textRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const [count, setcount] = useState(0)
    const increment = () => {
        ref.current++
        setcount(count + 1)
        console.log(ref.current)
    }
    const changeStyle=()=>{
        console.log(textRef)
        textRef.current.style.color='black'
    }
    return (
        <div>
            <button onClick={increment}>count:{count}</button>
            <input type="text" ref={inputRef} />
            <button onClick={changeStyle}>style</button>
            <p ref={textRef}>hai hello</p>
        </div>
    )
}

export default UseRef