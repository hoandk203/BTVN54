import React from 'react'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography} from '@mui/material'
import {Link} from "react-router-dom";
export default function ProductsCard({products}) {

  return (
    <div style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
        {products.map((product)=>{
            return (
                <Card key={product.id} sx={{ width: "250px", position: "relative", paddingBottom: "40px" }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        image={product.imgUrl}
                        alt={product.name}
                        />
                        <CardContent>
                            <Typography style={{wordBreak: "break-word"}} gutterBottom variant="h5" component="div">
                                {product.name}
                            </Typography>
                            <Typography style={{wordBreak: "break-word"}} variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{position: "absolute", bottom: "0"}}>
                        <Button variant="outlined" size="small" color="primary">
                            <Link style={{textDecoration: "none", color: "black", fontWeight: "bold"}} to={`/products/${product.id}`}>Xem chi tiết</Link>
                        </Button>
                    </CardActions>
                </Card>
            )
        })}
    </div>
  )
}
