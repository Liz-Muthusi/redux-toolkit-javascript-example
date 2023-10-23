import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderCreams, stockCreams } from './CreamSlice';

const CreamView = () => {
  const icecream= useSelector(state=>state.creams.numberOfIcecreams)

  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of ice creams - {icecream}</h1>
      <button onClick={()=>dispatch(orderCreams())}>Order ice cream</button>
      <button onClick={()=>dispatch(stockCreams(9))}>Restock ice creams</button>
    </div>
  )
}

export default CreamView