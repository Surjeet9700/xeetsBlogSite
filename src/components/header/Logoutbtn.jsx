import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import Loader from '../Loader/Loader'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Logoutbtn() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const logoutHandler = () => {
      setLoading(true)
        authservice.logout().then(() => {
          window.location.reload();
          dispatch(logout())
        })
        .catch((error) => {console.log(error)})
        .finally(() => {
          setLoading(false)
        })
    }
  return (
    <div>
    <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 
    focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2
    dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" onClick={logoutHandler}>Logout</button>
     <Loader visible={loading}/>
    </div>
  )
}

export default Logoutbtn