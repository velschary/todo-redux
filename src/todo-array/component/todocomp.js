import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { add,remove } from "../action/action"

export const TodoComp = () => {
    const [value, setValue] = useState('')
    console.log(value)
    const selector = useSelector(state=>state)
    const dispatch = useDispatch()
    console.log(selector)
    const changeHaandle = (e) => {
        setValue(e.target.value)
    }
    const addFun = () => {
        dispatch(add(value))
        setValue('')
    }
    const removeFun = (i) => {
        console.log(i)
        dispatch(remove(i))
    }
    return(
        <div>
            <h1>Iam from TodoComp</h1>
            <input type='text' 
            value={value}
            onChange={(e)=>changeHaandle(e)}/>&nbsp;
            <button onClick={addFun}>ADD_TODO</button>

           {/* {selector.map((v, i)=><li key={i}>{v}<button onClick={()=>removeFun(i)}>delete</button></li>)} array */}
           {selector.names.map((v, i)=><li key={i}>{v}<button onClick={()=>removeFun(i)}>delete</button></li>)}
        </div>
    )
}