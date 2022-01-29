import React from 'react'

type WorkScheduleProps = {
    modalControl:Function
}

export const AddFunction = (props:WorkScheduleProps) => {
    

    return (
        <button onClick={() => props.modalControl(true)}>追加情報</button>
    );
}
