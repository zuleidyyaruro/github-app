import React, { useEffect, useState } from 'react'
import CardRepo from '../Custom/CardRepo';

const Repositories = ({repos_url}) => {

    const [repos, setRepos]=useState([]);

    useEffect(()=>{

        const handleRepos=async()=>{
            const response=await fetch(repos_url);
            const result=await response.json();
            setRepos(result);
        }

        handleRepos();
    }, [repos_url]);

    return (
        <div className="col-lg-8">
            <h5 className="text-center">Repositories <span className="border px-2 rounded-pill">{repos.length}</span></h5>
            
            {
                repos.map(repo=>(
                    <CardRepo 
                        key={repo.id}
                        name={repo.name}
                        privat={repo.private}
                        language={repo.language}
                    />
                ))
            }
        </div>
    )
}

export default Repositories
