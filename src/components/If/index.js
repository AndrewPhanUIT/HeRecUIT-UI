import React from 'react'

function If({children, condition}){
    return condition ? children : <span></span>
}

export default If;