import React, { useState } from 'react'
import Navbar from './Navbar'

export default function Admin(props) {
    const [naziv, setNaziv] = useState('');
    const [skraceno, setSkraceno] = useState('')
    const [opis, setOpis] = useState('')
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='row mt-2 text-center'>
                    <div className='col-12 mt-2'>
                        <h1 className='text-center'>Kontrolna tabla</h1>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-6'>
                        <h2>Spisak ispita</h2>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Naziv ispita</th>
                                    <th>Skraceni naziv</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.ispiti.map(element => {
                                    return (
                                        <tr>
                                            <td>{element.naziv}</td>
                                            <td>{element.skraceno}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => {
                                                    props.onObrisi(element);
                                                }}>
                                                    Obrisi
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className='col-5'>
                        <h2>Kreiraj novi ispit</h2>
                        <form >
                            <label >Naziv ispita</label>
                            <input type="text" className='form-control' value={naziv} onChange={(e) => {
                                const value = e.target.value;
                                setNaziv(value);

                            }} />
                            <label >Skraceni naziv</label>
                            <input type="text" className='form-control' value={skraceno} onChange={(e) => {
                                const value = e.target.value;
                                setSkraceno(value);
                            }} />
                            <label >Opis</label>
                            <textarea cols="30" rows="10" className='form-control' value={opis} onChange={(e) => {
                                const value = e.target.value;
                                setOpis(value)
                            }} />
                            <button className='btn btn-primary form-control mt-2' onClick={(e) => {
                                e.preventDefault();
                                props.onDodaj({
                                    naziv: naziv,
                                    skraceno: skraceno,
                                    opis: opis
                                })
                            }}>Dodaj</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
