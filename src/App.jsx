import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import './App.css'
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'
import Logoutbtn from './components/index'

function App() {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout({}))
      }
    })
    .catch((error) => {console.error(error)})
    .finally(() => {setLoading(false)})
  },[])
  return !loading ? (
    <div>
    <Header/>
    <Logoutbtn setPosts={setPosts}/>
    <main>
      <Outlet/>
    </main>
    <Footer/>
</div>

  ) : (null)
}

export default App
