import React from 'react'
import { Switch, Route } from "react-router-dom"
import GuestHomeScreen from './pages/GuestHomeScreen'

const GuestRouter = () => {
  return (
    <Switch>
      <Route path="/">
        <GuestHomeScreen />
      </Route>
    </Switch>
  )
}

export default GuestRouter
