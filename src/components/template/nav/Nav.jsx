import React from 'react';
import NavItem from './Nav-Item';
import { Link }
 from 'react-router-dom';
import './Nav.css';

export default props => 
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
            <NavItem   icon="home" title="Início" />
            </Link>
            <Link to="/register">
            <NavItem   icon="film" title="Cadastro" />
            </Link>
        </nav>
    </aside>