import React from 'react'

const Scroll = prop => {
    return (
        <div style={{overflowY: 'scroll', border: '3px solid black', height: '70vh'}}>
            {prop.children}
        </div>        
    )
}

export default Scroll