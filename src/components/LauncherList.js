import React, { useState, useEffect } from 'react';
import { Switch, Route, Link } from "react-router-dom"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/launchers")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const launchersObjects = await response.json()
      setLaunchers(launchersObjects)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }


  useEffect(() => {
    fetchData()
  }, [])

  const launcherList = launchers.map((launcher) => {
    return(
      <div className='centered'>
        <h3 key={launcher.id}>
        <Link to={`/launchers/${launcher.id}`}>{launcher.name}</Link>
        </h3>
      </div>
    )
  })

  return(
    <div>
        {launcherList}
    </div>
  )
}

export default LauncherList;
