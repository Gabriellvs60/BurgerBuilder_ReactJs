import React from 'react';

import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from "../NavigationItems/NavigationItem";
import navigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>Menu</div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav>
        <navigationItems/>
        </nav>
    </header>
);

export default toolbar;