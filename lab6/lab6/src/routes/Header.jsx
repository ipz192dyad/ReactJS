import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Container } from '@nextui-org/react';

export default function Header() {
    const Navbar = styled.div`
            background-color: #333;
            overflow: hidden;
        `;
    const Button = styled.a`
            float: left;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: 17px;
        `;

    return (
        <Container>
            <Navbar>
                <Button href="/">Home</Button>
                <Button href='/categories'>Категорії</Button>
            </Navbar>
            <Outlet />
        </Container>
    );
}