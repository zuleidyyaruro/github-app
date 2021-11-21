import React from 'react'

const CardRepo = ({ name, privat, language }) => {
    return (
        <div className="border-bottom">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <p className="me-3">{name}</p>
                    <p className="border rounded-pill px-3">{privat ? 'Private' : 'Public'}</p>
                </div>

                <p>{language}</p>
            </div>
        </div>
    )
}

export default CardRepo
