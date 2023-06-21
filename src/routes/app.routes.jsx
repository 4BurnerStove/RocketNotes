import { Routes, Route } from 'react-router-dom'

import { Details } from '../pages/Details'
import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { NewNote } from '../pages/NewNote'


export function AppRoutes(){
  return(
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/NewNote' element={<NewNote/>} ></Route>
      <Route path='/profile' element={<Profile/>} ></Route>
      <Route path='/details/:id' element={<Details/>} ></Route>
    </Routes>

  )
}