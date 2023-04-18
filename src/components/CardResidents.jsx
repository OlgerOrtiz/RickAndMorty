import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({ urlResident }) => {
    const [resident] = useFetch(urlResident)
    return (
        <article className='CardResident__Content'>
            <header className='CardResident__Header'>
                <img className='Header__Image' src={resident?.image} alt={resident?.created} />
                <h3 className='Header__Name'>{resident?.name}</h3>
                <div className='Header__Status'>
                    <div className={`Header__Status--Circle ${resident?.status}`}></div>
                    <p className={`Header__Status--Info ${resident?.status}`}>{resident?.status}</p>
                </div>
            </header>
            <hr className='CardResident__Line' />
            <main className="CardResident__Body">
                <ul className='CardResident__Body--Info'>
                    <li className='Info__Data'><span className='Info__Label'>Specie</span>{resident?.species}</li>
                    <li className='Info__Data'><span className='Info__Label'>Gender</span>{resident?.gender}</li>
                    <li className='Info__Data'><span className='Info__Label'>type</span>{resident?.type}</li>
                    <li className='Info__Data'><span className='Info__Label'>Origin</span>{resident?.origin.name}</li>
                    <li className='Info__Data'><span className='Info__Label'>Episodes apperarances</span>{resident?.episode.length}</li>
                    <li className='Info__Data'><span className='Info__Label'>Resident Created</span>{resident?.created}</li>
                </ul>
            </main>
        </article>

    )
}

export default CardResidents