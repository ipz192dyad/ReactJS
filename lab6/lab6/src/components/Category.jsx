import { Card, Grid, Text } from "@nextui-org/react";
import {Link} from "react-router-dom";

export default function Category(props) {
    const { category, index } = props

    return (
        <Grid xs={6} sm={3} key={index}>
            <Card isPressable >
                <Link to={`${category}/products`} style={{textDecoration: "none"}}>
                    <Card.Body>
                        <Text css={{ textAlign: "center" }}>{category}</Text>
                    </Card.Body>
                </Link>
            </Card>
        </Grid>
    )
}