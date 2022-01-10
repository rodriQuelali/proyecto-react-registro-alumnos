import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid} from '@mui/material';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {decrement, increment} from "../features/counter/counterSlice";

export default function ProductComponent(props) {
    const product = props.product
    const [productIsInCart, setProductIsInCart] = useState(false)
    const dispatch = useDispatch()


    const onAdd = () => {
        setProductIsInCart(true)
        dispatch(increment())
    }

    const onRemove = () => {
        setProductIsInCart(false)
        dispatch(decrement())
    }

    return (
        <Grid item xs={8}>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body3" color="text.secondary">
                        {product.price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    productIsInCart ? <Button size="small" color="primary" onClick={onRemove}>
                        Remove from cart
                    </Button> : <Button size="small" variant="contained" onClick={onAdd}>
                        Add to cart
                    </Button>
                }

            </CardActions>
        </Card>
        </Grid>
    );
}
