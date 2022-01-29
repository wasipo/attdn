import React from "react";

type WorkScheduleProps = {
    showFlag: boolean,
    modalContol: Function
}

export const Modal = (props:WorkScheduleProps) => {
    return (
        <>
        {props.showFlag ? (
        <div id="overLay">
            <div id="content">
                <p>aaaaaaaaaa</p>
                <button onClick={() => props.modalContol(false)}>close</button>
            </div>
        </div>
        ):(
            <></>
        )}
        </>
    )
}