import React from 'react';
import {Link} from 'react-router-dom';

const CardUser = ({ avatar_url, login }) => {
    return (

        < div className="border-bottom" >
            
            <div className="card-body">

                    <div className="row">

                        <div className="col-lg-3">
                            <img src={avatar_url} alt="" />
                        </div>
                        <div className="col-lg-9 d-flex flex-column justify-content-center">
                            <p className="me-3 text-info fw-bold fs-4" >{login}</p>
                            <Link to={`/user/${login}`}>See Repositories</Link>
                        </div>
                    </div>


                </div>
            </div>
    
    )
}

export default CardUser
