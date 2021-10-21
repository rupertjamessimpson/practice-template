import React, { useState, useEffect } from 'react';

const LauncherShow = (props) => {

  const [selectedLauncher, setSelectedLauncher] = useState({})
  const launcherId = props.match.params.id

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/v1/launchers/${launcherId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const launcherObjects = await response.json()
      setSelectedLauncher(launcherObjects)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }



  useEffect(() => {
    fetchData()
  }, [])

  return (
  <div>
    <h1>{selectedLauncher.name}</h1>
    <h3>{selectedLauncher.bio}</h3>
  </div>
  )
}

export default LauncherShow