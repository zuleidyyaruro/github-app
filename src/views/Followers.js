import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardUser from '../components/Custom/CardUser';
import NabBar from '../components/Custom/NabBar';

const Followers = () => {

    const { user } = useParams();

    const [dataFollowers, setDataFollowers] = useState([]);

    useEffect(() => {
        const url = `https://api.github.com/users/${user}/followers`;
        const handleData = async () => {
            const response = await fetch(url);
            const result = await response.json();
            setDataFollowers(result)
        }

        handleData();
    }, [user]);


    return (
        <>
            <NabBar />
            <div className="container mt-5">
            <h2 className="text-center">{user} Followers</h2>
                {
                    dataFollowers.map((follower) => {
                        return (
                            <CardUser
                                key={follower.id}
                                avatar_url={follower.avatar_url}
                                login={follower.login}
                                repos={follower.repos_url}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Followers;