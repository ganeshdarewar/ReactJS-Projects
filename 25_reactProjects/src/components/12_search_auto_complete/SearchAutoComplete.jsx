
import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'

const SearchAutoComplete = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null) 
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filterUsers, setFilterUsers] = useState([])
    function fetchListOfUsers(){
        setLoading(true)
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data=>{
            data && data.users.length>0 ?
            setUsers(data.users.map((item)=>item.firstName))
            : null
            setLoading(false)
        })
        .catch((e)=> {
            setLoading(false)
            setError(e)
        })
    }
    useEffect(()=>{
        fetchListOfUsers()
    },[])

    function handleChange(e){
        const query = e.target.value.toLowerCase()
        setSearchParam(query)
        if(query.length>1){
            const filterData = users && users.length ?
            users.filter((item)=> item.toLowerCase().includes(query))
            : []
            setFilterUsers(filterData)
            setShowDropdown(true)
        }
        else{
            setShowDropdown(false)
        }
    }
    function handleClick(event){
        setSearchParam(event.target.innerText)
        setShowDropdown(false)
    }
  return (
    <div>
        {
            loading ? <h1>loading data</h1> : null
        }
        {
            error ? <h1>{error}</h1> : null
        }
      <input value={searchParam} onChange={(e)=>handleChange(e)} type="text" name="search-users" placeholder='Search User Here ...' />
      {
        showDropdown && <Suggestions data={filterUsers} handleClick={handleClick}/>
      }
    </div>

  )
}

export default SearchAutoComplete
