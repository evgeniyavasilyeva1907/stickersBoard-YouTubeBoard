import React, { useState } from 'react';
import Modal from 'react-modal'

function Sticker({ edit, id, remove, index, color, text, favorite, starClass }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editText, setEditText] = useState('')
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const ModalWinow = () => {
        setModalOpen(!modalOpen)
    }

    const rem = () => {
        remove(id);
        ModalWinow()
    }

    const openEditModal = () => {
        setEditModal(true)
        setEditText(text)
    }
    const closeEditModal = () => {
        setEditModal(false)
        setEditText('')
    }
    const ed = () => {
        edit(id, editText)
        closeEditModal()
    }


    const fav = () => {
        favorite(id);
    }


    return (
        <div className='sticker' key={index}
            style={{ backgroundColor: `${color}` }} >
            <Modal
                isOpen={modalOpen}
                onRequestClose={ModalWinow}
                contentLabel="Example Modal"
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="Modal">
                    <div>Вы уверены что хотите удалить стикер?</div>
                    <button onClick={rem}>Да, уверн</button>
                    <button onClick={ModalWinow}> Отмена</button>

                </div>
            </Modal>
            <Modal
                isOpen={editModal}
                onRequestClose={closeEditModal}
                contentLabel="Example Modal"
                style={customStyles}
                ariaHideApp={false}
            >
                <div className="Modal">
                    <div>Вы уверены что хотите внести изменения?</div>
                    <input value={editText} onChange={(e) => setEditText(e.target.value)}></input>
                    <button onClick={ed}>Да, уверн</button>
                    <button onClick={closeEditModal}> Отмена</button>

                </div>
            </Modal>

            <div >{text}</div>
            <i className={starClass} onClick={fav} ></i>
            <button onClick={openEditModal}>редактировать</button>
            <button onClick={ModalWinow}>удалить</button>

        </div>

    )
}

export default Sticker