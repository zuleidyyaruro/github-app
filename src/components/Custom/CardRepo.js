import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const CardRepo = ({ name, privat, language }) => {

    const handleLanguage=(language)=>{
        let color='';
        if(language==='JavaScript'){
            color='#FFF323';
        }else if(language==='HTML'){
            color='#FF5403';
        }else if(language==='Python'){
            color='#396EB0';
        }else if(language==='CSS'){
            color='#396EB0';
        }else if(language==='PHP'){
            color='#753188';
        }else if(language==='Dart'){
            color='#32C1CD';
        }
        return color;
    }

    return (
        <div className="border-bottom">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <p className="me-3">{name}</p>
                    <p className="border rounded-pill px-3">{privat ? 'Private' : 'Public'}</p>
                </div>

                <p><span className="px-2" style={{color:handleLanguage(language)}}><FontAwesomeIcon icon={faCircle} size="lg"/></span>{language}</p>
            </div>
        </div>
    )
}

export default CardRepo
