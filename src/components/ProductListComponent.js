import {Grid, Container} from "@mui/material";
import ProductComponent from "./ProductComponent";
import {useEffect, useState} from "react";
import axios from 'axios'
import ButtonAppBar from "./AppBar";

const ProductListComponent = (props) =>{
    const styless = {padding: 10, margin:"5px auto",width: 1200}
    const defaultImage = "https://m.media-amazon.com/images/I/71E5zB1qbIL._FMwebp__.jpg"
    const [products, setProducts] = useState([])


    useEffect(() => {
        const url = "https://martket-django-app.herokuapp.com/inventory/products/"

        axios.get(url).then(response => {
            const treatedProducts = response.data.map(item=>{
                return {
                    ...item,
                    description: item.name,
                    image: defaultImage
                }
            })
            setProducts(treatedProducts)
            console.log(products);
        })
    }, [])


    const onAddProductToCart = props.onAddProductToCart
    const onRemoveProductFromCart = props.onRemoveProductFromCart

    return (
        <div>
            <ButtonAppBar/>
            <Container>
                <Grid style={styless} container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} mt={5}>
                    {
                        products.map((item, index) => {
                            return <Grid item xs={2} sm={4} md={4} key={index}>
                                <ProductComponent
                                    product={item}
                                    onAddProductToCart={onAddProductToCart}
                                    onRemoveProductFromCart={onRemoveProductFromCart}
                                />
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}

export default ProductListComponent