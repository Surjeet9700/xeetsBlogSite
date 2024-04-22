import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authservice.logout().then(() => {
            dispatch(logout())
        })
        .catch((error) => {console.log(error)})
    }
  return (
    <button className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 
    focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2
     dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800" onClick={logoutHandler}>Logout</button>
  )
}

export default Logoutbtn