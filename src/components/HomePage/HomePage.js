import React, { useContext } from 'react'

// now we just need to define that we want to get Appcontext component
import AppContext from '../../context/appContext'

const HomePage = () => {
    // let's use object desturcturing to get all the passed data
    const { message, isAuth, setIsAuth } = useContext(AppContext);

  return (
    <div className='HomePage'>
        <div style={{ background: isAuth ? "green" : "red" }}>
            <p>This is the passed message: {message}</p>
            {isAuth ? (
                <button onClick={() => setIsAuth(false)}>Logout</button>
            ) : (
                <button onClick={() => setIsAuth(true)}>Login</button>
            )}
        </div>
    </div>
  )
}

export default HomePage