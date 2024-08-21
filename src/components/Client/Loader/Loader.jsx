import React from 'react';

const Loader = ({size = 1.55, variant}) => {
    return (
        <span className={`loader ${variant === 'default' ? 'default' : ''}`} style={{ '--loader-size': size + 'rem' }}></span>
    );
};

export default Loader;