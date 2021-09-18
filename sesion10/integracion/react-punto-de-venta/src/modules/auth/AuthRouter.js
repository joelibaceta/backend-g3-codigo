import React from 'react'
import { Switch, Route } from "react-router-dom";
import AuthLoginScreen from './pages/AuthLoginScreen';
const AuthRouter = () => {
  return (
    <Switch>
      <Route path="/auth/login">
        <AuthLoginScreen />
      </Route>
    </Switch>
  )
}

export default AuthRouter
