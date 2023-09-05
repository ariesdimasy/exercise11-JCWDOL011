import './App.css'

import { Routes, Route} from "react-router"

import MyNavbar from './components/MyNavbar';
import UserList from "./pages/userList"
import UserRegister from './pages/userRegister';
import Tweet from './pages/tweets';

function App() {

  return (
    <>
      <MyNavbar></MyNavbar>
      <Routes>
        <Route path='/' Component={UserList}></Route>
        <Route path='/user-register' Component={UserRegister}></Route>
        <Route path='/tweets' Component={Tweet}></Route>
      </Routes>
    </>
  )
}

export default App
