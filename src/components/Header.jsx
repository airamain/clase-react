import React from 'react';

function Header({titulo}) {

    return (
        <div>
            <h1>Nuetro titulo viene por props - {titulo} </h1>
        </div>
    )
}

export default Header
