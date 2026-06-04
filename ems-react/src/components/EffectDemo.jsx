import {useEffect, useState} from 'react';
export default function EffectDemo(){
    const [count,setCount]=useState(0)
    const [text,setText]=useState("")
    console.log("Component Rendered")
    useEffect(()=>{
        console.log("1. no deps: runs after every render")
    })
    useEffect(()=>{
        console.log("2. empty deps: runs only on mount")
    },[])
    useEffect(()=>{
        console.log("3. count deps: runs when count changes",count)
    },[count])
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("4. timer tick")
        },1000)
        return ()=>{
            clearInterval(timer)
            console.log("4. timer cleaned up")
        }
    },[])
    return(
        <div>
            <h2>useEffect Demo</h2>
            <p>count: {count}</p>
            <button onClick={()=>setCount(c=>c+1)}>Increment</button>
            <br/>
            <br/>
            <input placeholder="Type something" value={text} onChange={(e)=>setText(e.target.value)}/>
            <p>Text:{text}</p>
        </div>
        )
    }