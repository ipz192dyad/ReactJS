import { Card, Text, Grid, Row } from "@nextui-org/react";
import styles from '../index.module.css'
import { Link } from "react-router-dom";

export default function ProductItem(props) {
    const { product } = props

    return (
        <Grid xs={6} sm={3} key={product.id}>
            <Card isPressable>
                <Link to={`${product.id}`} style={{ textDecoration: "none" }}>
                    <Card.Body css={{ p: 0 }}>
                        <Card.Image
                            src={product.thumbnail}
                            objectFit="cover"
                            width="100%"
                            height={240}
                            alt={product.title}
                        />
                    </Card.Body>
                    <Card.Footer css={{ justifyItems: "flex-start" }}>
                        <Row wrap="wrap" justify="space-around" align="center">
                            <Text b>{product.title}</Text>
                            <Text className={styles.price} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                                {product.price} $
                            </Text>
                        </Row>
                    </Card.Footer>
                </Link>
            </Card>
        </Grid>
    );
}