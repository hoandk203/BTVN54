import React, { useEffect } from 'react'
import {ProductsCard} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { selectProducts } from '../../store'
import { actionProducts } from '../../store'

export default function ProductMain() {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    const getProducts = () => {
        dispatch(actionProducts("load", products));
    }

    useEffect(()=>{
        getProducts();
    }, [])
  return (
    <div>
        <h1>ProductMain</h1>
        <ProductsCard products={products}/>
    </div>
    
  )
}
