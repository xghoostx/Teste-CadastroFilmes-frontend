import React from 'react';
import './Nav.css';

export default props => 
        <nav className="menu-item">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </nav>
  