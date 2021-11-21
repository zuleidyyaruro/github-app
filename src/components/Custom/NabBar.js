import React from 'react';
import {Link} from 'react-router-dom';

const NabBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark pt-3 pb-3">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand mb-0 h1">GITHUB APP</Link>
            </div>
        </nav>
    )
}

export default NabBar;
