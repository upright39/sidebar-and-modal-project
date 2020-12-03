import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContex } from './context'

const Sidebar = () => {
  const { closeSideBar, isSideBarOpen } = useGlobalContex()
  return (
    <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className="Sidebar-header">
        <img src={logo} className="logo" alt="coding" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((links) => {
          const { id, url, text, icon } = links
          return (
            <li key={id}>
              {
                <a href={url}>
                  {icon}
                  {text}
                </a>
              }
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
