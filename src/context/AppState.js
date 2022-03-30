// This is Our context component

import React, { useState } from 'react';
import AppContext from './appContext';

const AppState = (props) => {
    // let's destructure some state values
    const [isAuth, setIsAuth] = useState(false);


  return (
    //   It's called provider and all the component that consumes these states are called consumers
      <AppContext.Provider
            value={{
            //   All the states that we want to shart it among other tree components
            // we can share states or methods
            isAuth,
            setIsAuth,
            message: 'Hello from AppContext!'
            }}
        >
          {/* this makes all children have acces to these passed values */}
          {props.children}
      </AppContext.Provider>
  )
}

export default AppState