import React from 'react'

function Header() {

    const heading = {
        color: '#fa9191',
        textAlign: 'center',
       }
    const main ={
        color: 'red',
    }
    
    return(
        
        <>
            <h1 style={heading} >Header Section</h1>
            <div style={main}>Main section </div>
            <img src='https://picsum.photos/200/300' />
        </>
    )
}

export default Header;