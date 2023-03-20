import React from "react";
import {useDispatch,useSelector} from 'react-redux';
import {incNumber,decNumber} from '../actions/index'

const TestingRedux = ()=>{
    const myState = useSelector((state)=>state.changeNumber)
    const dispatch = useDispatch()
    return(<>
    <div className="flex flex-row gap-4">
        <button className="bg-slate-400 p-4" onClick={()=>dispatch(incNumber())}>+</button>
        <p>{myState}</p>
        <button  className="bg-slate-400 p-4" onClick={()=>dispatch(decNumber())}>-</button>
    </div>
    </>)
}

export default TestingRedux