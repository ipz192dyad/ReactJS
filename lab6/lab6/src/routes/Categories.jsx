import Category from "../components/Category"
import { useLoaderData } from "react-router-dom";
import { Grid } from "@nextui-org/react";

export default function Categories() {
    const categories = useLoaderData()

    return (
        <div>
            <h1>Категорії</h1>
            <Grid.Container gap={2} justify="flex-start">
                {categories.map((category) => (
                    <Category key={category} category={category}/>
                ))}
            </Grid.Container>
        </div>
    );
}