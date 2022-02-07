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
        <button type="button" onClick={kickAction} className='inline-flex shadow-sm text-sm justify-center px-4 py-2 rounded font-medium bg-white text-gray-500 focus:outline-white border border-gray-500 hover:bg-gray-300'>追加情報</button>
    );
}


type CompleteButton = {
    rowNumber: number,
    setValue:Function,
    getValues:Function,
    formName: string[],
}

export const CompleteButton = (props:CompleteButton) => {

    const setFormValue = (name:string[]) => {
        const formValue = props.getValues(name);
        alert(JSON.stringify(props.formName))
        alert(JSON.stringify(formValue));
    }

    return (
        <button type="button" onClick={() => {setFormValue(props.formName)}} className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>入力完了</button>
    );
}
