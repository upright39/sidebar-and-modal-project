import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContex } from './context'
const Home = () => {
  const { openSideBar, openModalBar } = useGlobalContex()

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSideBar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModalBar}>
        show Modal
      </button>
    </main>
  )
}

export default Home
