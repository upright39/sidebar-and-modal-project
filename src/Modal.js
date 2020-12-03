import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContex } from './context'
const Modal = () => {
  const { closeModalBar, isModalBarOpen } = useGlobalContex()

  return (
    <div
      className={`${
        isModalBarOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className="modal-container">
        <h3>modal content</h3>
        <button className="close-modal-btn" onClick={closeModalBar}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
