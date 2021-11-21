import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ avatar_url, name, login, followers_url, following_url }) => {

    const [numberFollowers, setNumberFollowers] = useState(0);
    const [numberFollowings, setNumberFollowings] = useState(0);

    useEffect(() => {

        const changeUrlFollowing = ((following_url.indexOf('{')));
        const urlFollowing = following_url.slice(0, changeUrlFollowing);

        const handleFollowers = async () => {
            const response = await fetch(followers_url);
            const result = await response.json();
            setNumberFollowers(result.length);
        }

        const handleFollowings = async () => {
            const response = await fetch(urlFollowing);
            const result = await response.json();
            setNumberFollowings(result.length);
        }

        handleFollowers();
        handleFollowings();

    }, [followers_url, following_url])

    return (
        <div className="col-lg-4 ">
            <img src={avatar_url} alt="" />
            <h4 className="text-center mt-3">{name}</h4>
            <h6 className="text-center">{login}</h6>
            <div className="d-flex justify-content-center" >
                <Link className="text-decoration-none" to={`/${login}/followers`}>{numberFollowers} Followers</Link>
                <Link className="px-2 text-decoration-none "  to={`/${login}/followings`}>{numberFollowings} Followings</Link>
            </div>
        </div>
    )
}

export default Profile
