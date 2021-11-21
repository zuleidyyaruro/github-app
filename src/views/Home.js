import React, { useEffect, useState } from 'react';
import NavBar from '../components/Custom/NabBar';
import Form from '../components/Home/Form';
import Profile from '../components/Home/Profile';
import Repositories from '../components/Home/Repositories';
import { useParams } from 'react-router-dom';

const Home = () => {

    const { login } = useParams();

    const [userName, setUserName] = useState('zuleidyyaruro');
    const [dataUserName, setDataUserName] = useState(null);

    useEffect(() => {

        if (login) {
            const handleDataUserName = async (e) => {
                const response = await fetch(`https://api.github.com/users/${login}`)
                const result = await response.json();
                setDataUserName(result);
            }
            handleDataUserName();
        } else {
            if (userName) {
                const handleDataUserName = async (e) => {
                    const response = await fetch(`https://api.github.com/users/${userName}`)
                    const result = await response.json();
                    setDataUserName(result);
                }
                handleDataUserName();
            }
        }

    }, [login]);

    const handleUserName = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.github.com/users/${userName}`)
        const result = await response.json();
        setDataUserName(result);
        setUserName(null);
    }

    return (
        <>
            <NavBar />
            <div className="container mt-3">
                <Form handleUserName={handleUserName} handleSubmit={handleSubmit} />
                <div className="row mt-5">
                    {
                        dataUserName ?
                            <>
                                <Profile
                                    avatar_url={dataUserName?.avatar_url}
                                    name={dataUserName?.name}
                                    login={dataUserName?.login}
                                    followers_url={dataUserName?.followers_url}
                                    following_url={dataUserName?.following_url}
                                />
                                <Repositories
                                    repos_url={dataUserName.repos_url}
                                />
                            </>
                            :
                            null
                    }
                </div>
            </div>
        </>
    )
}

export default Home
