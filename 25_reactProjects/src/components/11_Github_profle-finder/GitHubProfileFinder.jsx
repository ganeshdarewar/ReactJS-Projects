import React, { useEffect, useState } from 'react'

const GitHubProfileFinder = ({ url = 'https://api.github.com/users/' }) => {

    const [data, setData] = useState(null)
    const [username, setUserName] = useState('ganeshdarewar')
    async function fetchData(getUrl) {
        try {
            let response = await fetch(`${getUrl}${username}`)
            let result = await response.json()
            setData(result)
        }
        catch (e) {
            console.log('error ', e);
        }
    }
    useEffect(() => {
        fetchData(url)
    }, [url])
    function handleFindUser(getInput){
        setUserName(getInput)
        fetchData(url)
        setUserName('')
    }

    return (
        <div className='flex flex-col justify-center items-center p-5 gap-10'>
            <div className='flex gap-5'>
                <input className='p-2 text-lg' value={username} onChange={(e)=> setUserName(e.target.value)} type="text" placeholder='Search GitHub Username' />
                <button className='p-2 text-lg bg-green-600 text-white rounded-lg' onClick={()=> handleFindUser(username)}>Search Username</button>
            </div>
            {
                data !== null ?
                    <div className='flex flex-col items-center gap-4 w-5/6 h-5/6 border-2 border-yellow-300 rounded bg-slate-400'>
                        <img className='rounded-full h-[200px] w-[200px] border-2 border-blue-500 ' src={data.avatar_url} alt="" />
                        <a className='text-lg' href={data.html_url}>{data.login}</a>
                        <h1 className='text-lg'>User joined on {data.created_at}</h1>
                        <h1 className='text-lg'>Followers {data.followers}</h1>
                        <h1 className='text-lg'>Following {data.following}</h1>
                        <h1 className='text-lg'>Public repo {data.public_repos}</h1>
                    </div>
                    : <div>no data found</div>
            }
        </div>
    )
}

export default GitHubProfileFinder
