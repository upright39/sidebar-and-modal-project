import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [isModalBarOpen, setIsModalBarOpen] = useState(false)

  const openSideBar = () => {
    setIsSideBarOpen(true)
  }
  const closeSideBar = () => {
    setIsSideBarOpen(false)
  }
  const openModalBar = () => {
    setIsModalBarOpen(true)
  }
  const closeModalBar = () => {
    setIsModalBarOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isModalBarOpen,
        openModalBar,
        closeModalBar,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContex = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
