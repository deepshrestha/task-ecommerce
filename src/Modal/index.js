import React from "react";
import { createPortal } from "react-dom";

function Portal({ children, modalForm, handleOrder }) {
    const modalRoot = document.getElementById("modal-root");
    const modalDocument = modalForm
        ? React.createElement("form", { onSubmit: handleOrder }, children)
        : children;
    return createPortal(modalDocument, modalRoot);
}
function Modal({ modalId, modalTitle, modalForm, children, visible, toggle, handleOrder }) {
    return (
        <>
            {visible ? (
                <Portal modalForm={modalForm} handleOrder={handleOrder}>
                    <div
                        className="modal fade"
                        id={modalId}
                        data-backdrop="static"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="showModalLabel"
                        aria-hidden="true"
                    >
                        <div
                            className={`modal-dialog modal-dialog-centered modal-lg}`}
                            role="document"
                        >
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="showModalLabel"
                                    >
                                        {modalTitle}
                                    </h5>
                                    <button
                                        className="close"
                                        data-dismiss="modal"
                                        onClick={toggle}
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body modal-content-scroll">{children}</div>
                            </div>
                        </div>
                    </div>
                </Portal>
            ) : null}
        </>
    );
}

export default Modal;
