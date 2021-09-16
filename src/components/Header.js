import React from 'react';

const Header = (props) => {
    return (
        <h1>{props.x}<span>{props.y}</span></h1>
    );
};

export default Header;