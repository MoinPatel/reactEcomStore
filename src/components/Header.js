import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav";
const Header = () => {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src="./images/logo.png" alt="My Logo image" />
            </NavLink>
            <Nav />
        </MainHeader>
    )
};
const MainHeader =  styled.header `
    padding: 0 4.8rem;
    height: 10 rem;
    background-color: ${({ theme }) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-item: center;
    position: relative




`

export default Header
