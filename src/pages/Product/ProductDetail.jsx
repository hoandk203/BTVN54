import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectProducts, selectCarts } from '../../store'
import { actionCarts } from '../../store'
import { Button } from '@mui/material'
export default function ProductDetail() {
    const dispatch = useDispatch();
    const {id}= useParams();
    const products = useSelector(selectProducts);
    const carts = useSelector(selectCarts);
    const product = products.find((product) => product.id == id);

    const onAddCart = () => {
        const currProduct = carts.find((cart) => cart.id == product.id);
        const newCart = carts.filter((cart) => cart.id != product.id);
        const addCart = currProduct 
            ? [...newCart, {...currProduct, quantity: currProduct.quantity + 1}]
            : [...newCart, {...product, quantity: 1}];

        dispatch(actionCarts("add", addCart));
    }

  return (
    <div style={{maxWidth: "960px", margin: "100px auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px"}}>
        <div style={{display: "flex", gap: "20px"}}>
            <img style={{width: "300px", height: "300px"}} src={product.imgUrl} alt={product.name} />
            <div style={{position: "relative"}}>
                <h2>Tên sản phẩm: {product.name}</h2>
                <p>Mô tả: {product.description}</p>
                <p>Giá: {product.price}</p>
                <Button onClick={onAddCart} variant="contained" style={{position: "absolute", bottom: "20px", width: "150px"}}>
                    <Link style={{textDecoration: "none", color: "white"}} to={`/cart`}>add to cart</Link>
                </Button>
            </div>
        </div>
        
    </div>
  )
}
