import React from 'react'
import Ispit from './Ispit'
import Navbar from './Navbar'

export default function Prikaz(props) {
    return (
        <>
            <Navbar />
            <div className='container'>
                {
                    props.ispiti.map(element => {
                        return <Ispit ispit={element} />
                    })
                }
            </div>
        </>
    )
}
