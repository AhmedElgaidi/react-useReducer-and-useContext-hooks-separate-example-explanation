import React, { useContext } from 'react'
import AppContext from '../../context/appContext'


const FeedPage = () => {
    const { message, isAuth } = useContext(AppContext);
  return (
    <div>
        <h2>Feed page</h2>
        <p>Is user authenticated:{ isAuth ? 'true' : 'false' }</p>
        <p>This is passed data: { message }</p>
    </div>
  )
}

export default FeedPage