import React from 'react'

type WorkScheduleProps = {
    modalControl:Function,
    rowNumber: number,
    getClickRow: Function,
}

export const AddFunction = (props:WorkScheduleProps) => {
    
    const kickAction = () => (
        props.modalControl(true),
        props.getClickRow(props.rowNumber)
    )


    return (
        <button onClick={kickAction} className='inline-flex shadow-sm text-sm justify-center px-4 py-2 rounded font-medium bg-white text-gray-500 focus:outline-white border border-gray-500 hover:bg-gray-300'>追加情報</button>
    );
}


export const CompleteButton = (props:WorkScheduleProps) => {
    
    const kickAction = () => (
        props.getClickRow(props.rowNumber)
    )

    return (
        <button onClick={kickAction} className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>入力完了</button>
    );
}
