import React, { Component, lazy, Suspense, useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import M from 'materialize-css'

import NavigationBar from './NavigationBar'
import Footer        from './Footer'
import Ω             from './1717'
const LandingPage = lazy(() => import('./LandingPage'))


export default function Application() {
  useEffect(() => {
    M.AutoInit()
  })

  return (
    <Router>
      <main id="UI" className="container">
        <NavigationBar />
        <Suspense fallback={<div><h3>Loading...</h3></div>}>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Suspense>
        <Footer />
      </main>
    </Router>
  )
}
