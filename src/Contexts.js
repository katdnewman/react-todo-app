import React from 'react'


// Init state value as empty object and empty function. Used when no provider is defined
export const StateContext = React.createContext({
    state: {},
    dispatch: () => {}
 })
 