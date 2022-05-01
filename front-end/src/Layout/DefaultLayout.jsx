import React from 'react'
import NavbarComponenet from '../Components/NavbarComponenet'

function DefaultLayout(props) {
    return (<>
        <NavbarComponenet />
        {props.children}
    </>
    )
}

export default DefaultLayout