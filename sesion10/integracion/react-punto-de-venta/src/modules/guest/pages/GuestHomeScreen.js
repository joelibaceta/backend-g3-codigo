import React from 'react'
import { Link } from "react-router-dom"

const GuestHomeScreen = () => {
  return (
    <main className="container-fluid">

      <div className="row bg-dark justify-content-center align-items-center" style={{
        minHeight: "100vh"
      }}>

        <div className="col-md-3">
          <Link to="/admin">
            <div className="card p-5 bg-warning text-white">
              <div className="card-body">
                <h4 className="display-4">
                  Admin
              </h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/pos/terminal">
            <div className="card p-5 bg-info text-white">
              <div className="card-body">
                <h4 className="display-4">
                  Terminal POS
              </h4>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/auth/login">
            <div className="card p-5 bg-danger text-white">
              <div className="card-body">
                <h4 className="display-4">
                  Login
                </h4>
              </div>
            </div>
          </Link>
        </div>

      </div>

    </main>
  )
}

export default GuestHomeScreen
