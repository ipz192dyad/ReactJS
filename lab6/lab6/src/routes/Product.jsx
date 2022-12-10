import { useLoaderData } from "react-router-dom";
import { Grid, Image, Text } from "@nextui-org/react";


export default function Product() {
    const product = useLoaderData();

    return (
        <>
            <Grid.Container gap={2} justify="flex-start" css={{mt: 5}}>
                <Grid xs={12} sm={6} css={{ backgroundColor: "Black"}}>
                    <Image src={product.thumbnail} />
                </Grid>
                <Grid xs={12} sm={6} direction="column">
                    <Text h1>{product.title}</Text>
                    <Text h3>{product.description}</Text>
                </Grid>
                <Grid xs={12} sm={6}>
                    {product.images.map((image) => (
                        <Grid xs={6} sm={3}>
                            <Image src={image} />
                        </Grid>
                    ))}
                </Grid>
                <Grid xs={12} sm={6} direction="column">
                    <Text h3>Price: {product.price}$</Text>
                    <Text h4>Rating: {product.rating}</Text>
                    <Text h4>Stock: {product.stock}</Text>
                </Grid>
            </Grid.Container>
        </>
    )
}