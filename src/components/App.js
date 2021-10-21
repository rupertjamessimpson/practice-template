import React, { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Redirect } from 'react-router-dom'
import FAQList from "./FAQList"
import LauncherList from "./LauncherList"
import LauncherShow from "./LauncherShow"

const App = () => {
  return (
    <div>
      <a className='centered' href="http://localhost:4567/">Home </a>
      <a className='centered' href="http://localhost:4567/launchers">Launchers</a>
      <BrowserRouter>
        <Route exact path="/" component={FAQList} />
        <Route exact path="/launchers" component={LauncherList} />
        <Route exact path="/launchers/:id" component={LauncherShow} />
      </BrowserRouter>
    </div>
  )
}

export default App