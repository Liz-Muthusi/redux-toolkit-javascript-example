import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderCake, stockCakes } from './CakeSlice'

export const CakeView = () => {
  const cakes=useSelector(state=>state.cakes.numberOfCakes)

  const dispatch= useDispatch()
  return (
    <div>
      <h1>Number of cakes - {cakes}</h1>
      <button onClick={()=>dispatch(orderCake())}>Order Cake</button>
      <button onClick={()=>dispatch(stockCakes(5))}>Restock Cakes</button>
    </div>
  )
}
