import React from 'react';
import { Link } from '@reach/router';

const Header = (props)=> {
    
    const {link, linkText, subText}=props;

    return(
        <div>
            <h1>Pet Shelter</h1>
            <Link to={link}>{linkText}</Link>
            <p>{subText}</p>
        </div>
    )
}

export default Header;

//
