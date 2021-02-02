import React from 'react'

export default function Ispit(props) {
    return (
        <div className='row mt-2 border justify-content-center rounded bg-light'>
            <div className='col-12 text-center'>
                <h3>{props.ispit.naziv} <span>({props.ispit.skraceno})</span></h3>

                <hr />
                <p>
                    {props.ispit.opis}
                </p>
            </div>
        </div>
    )
}
