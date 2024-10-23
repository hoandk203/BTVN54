import React from 'react'
import { useSelector } from 'react-redux'
import { selectCarts } from '../../store'
import {Button} from '@mui/material'
import {Link} from "react-router-dom";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

const columns = [
    {
        id: "name",
        name: "Tên sản phẩm"
    },
    {
        id: "price",
        name: "Giá"
    },
    {
        id: "quantity",
        name: "Số lượng"
    },
    {
        id: "total",
        name: "Thành tiền"
    },
    {
        id: "action",
        name: ""
    }
];

export default function CartMain() {
    const carts = useSelector(selectCarts);
    console.log(carts);
    
  return (
    <div>
        <h1>CartMain</h1>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((column)=>(
                            <TableCell key={column.id}>{column.name}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {carts.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {columns.map((column)=>{
                                if(column.id === "action"){
                                    return <TableCell key={`${index}${column.id}`}>
                                        <Button variant="contained" color="error">Xóa</Button>
                                    </TableCell>
                                }
                                if(column.id === "quantity"){
                                    return <TableCell key={`${index}${column.id}`}>{row.quantity}</TableCell>
                                }
                                if(column.id === "total"){
                                    return <TableCell key={`${index}${column.id}`}>{row.price * row.quantity}</TableCell>
                                }
                                return (
                                    <TableCell key={`${index}${column.id}`}>{row[column.id]}</TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained"><Link style={{textDecoration: "none", color: "white"}} to="/products">Xem thêm sản phẩm</Link></Button>
    </div>
  )
}
