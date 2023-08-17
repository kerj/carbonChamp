import React from 'react'
import App from "next/app"

const TheApp = ({ Component, props }) => {
  return (
    <Component {...props} />
  )
}

TheApp.getInitialProps = async (appContext) => {
  const props = await App.getInitialProps(appContext);

  return { ...props }
}

export default App
