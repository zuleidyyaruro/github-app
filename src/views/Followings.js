import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardUser from '../components/Custom/CardUser';
import NabBar from '../components/Custom/NabBar';

const Followings = () => {

    const { user } = useParams();

    const [dataFollowing, setDataFollowing] = useState([]);

    useEffect(() => {
        const url = `https://api.github.com/users/${user}/following`;
        const handleData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setDataFollowing(result)
        }
        handleData();
    }, [user]);

    return (
        <>
            <NabBar />
            <div className="container mt-5">
                <h2 className="text-center">{user} Followings</h2>
                {
                    dataFollowing.map((following) => {
                        return (
                            <CardUser
                                key={following.id}
                                avatar_url={following.avatar_url}
                                login={following.login}
                                repos={following.repos_url}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Followings
