import React from 'react'
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Stack direction="column" spacing={1} maxWidth={"200px"}>
        <Button variant="contained"><Link style={{textDecoration: "none", color: "white"}} to="/products">Products</Link></Button>
        <Button variant="contained"><Link style={{textDecoration: "none", color: "white"}} to="/cart">Cart</Link></Button>
      </Stack>
    </div>
  )
}
