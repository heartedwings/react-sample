import React from "react";
import { useHistory } from "react-router-dom";

const Navi = () => {
    const history = useHistory();
    const handleLink = path => history.push(path);

    return (
        <nav>
            <button onClick={ () => handleLink('/about/100')}>About</button>
            <button onClick={ () => handleLink('/users')}>About</button>
            <button onClick={ () => handleLink('/')}>About</button>
        </nav>
    )
}

export default Navi