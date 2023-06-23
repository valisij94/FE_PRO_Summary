import React from 'react'
import s from './index.module.css'
import { useSelector } from 'react-redux'

export default function ModalComponent({ text }) {

    const shouldShow = useSelector(state => state.shouldShowModal);

    return (
        shouldShow ? (
            <div
                className={s.modal_container}
            >
                <div className={s.modal_content}>
                    {text}
                </div>
            </div>
        )
        : null
    )
}
