import React from 'react'

type WorkScheduleProps = {
    modalControl:Function
}

export const AddFunction = (props:WorkScheduleProps) => {
    

    return (
        <button onClick={() => props.modalControl(true)} className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>追加情報</button>
    );
}
