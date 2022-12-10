import { useLoaderData, useSearchParams } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { Grid, Input, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";


export default function Products() {
    const products = useLoaderData().products;
    let [searchParams, setSearchParams] = useSearchParams();
    let searchString = searchParams.get("q");
    let [searchRes, setSearchRes] = useState(null);

    useEffect(() => {
        let abortController = new AbortController();

        async function getProducts() {
            let response = await fetch(`https://dummyjson.com/products/search?q=${searchString}`, {
                signal: abortController.signal,
            });
            if (!abortController.signal.aborted) {
                let data = await response.json();
                setSearchRes(data.products);
            }
        }

        if (searchString) {
            getProducts();
        }

        return () => {
            abortController.abort();
        };
    }, [searchString]);

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let newProducts = formData.get("q");
        if (!newProducts) setSearchRes(null);
        setSearchParams({ q: newProducts });
    }

    return (
        <>
            <h1>Products</h1>
            <form onSubmit={handleSubmit}>
                <Input initialValue={searchString ?? undefined} name="q" aria-label="Search" clearable placeholder="Search" />
                <Button type="sumbit" flat color="primary" auto css={{ display: "inline-block", ml: 10 }}>Search</Button>
            </form>
            <Grid.Container gap={2} justify="center">
                {!searchRes ? products.map((product) => (<ProductItem key={product.id} product={product} />)) : searchRes.map((product) => (<ProductItem key={product.id} product={product} />))}
            </Grid.Container>
        </>
    )
}