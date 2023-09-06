import React, { Suspense } from "react"

import './App.css'

import { Routes, Route} from "react-router"

import MyNavbar from './components/MyNavbar';
import TestComponent from "./components/TestComponent"

import UserList from "./pages/userList"
import UserRegister from './pages/userRegister';
// import Tweet from '';

const Tweet = React.lazy(() => import("./pages/tweets")) // dynamic import

function App() {

  return (
    <>
      <MyNavbar></MyNavbar>
      <TestComponent />
      <Suspense fallback={<div> Loading ...</div>}>
      <Routes>
        <Route path='/' Component={UserList}></Route>
        <Route path='/user-register' Component={UserRegister}></Route>
        <Route path='/tweets' Component={Tweet}></Route>
      </Routes>
      </Suspense>
    </>
  )
}

export default App
