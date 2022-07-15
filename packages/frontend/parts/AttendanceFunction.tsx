import React from 'react'
import {useForm, useWatch, Control} from "react-hook-form";


type WorkScheduleProps = {
  modalControl: Function,
  rowNumber: number,
  getClickRow: Function,
}

export const AddFunction = (props: WorkScheduleProps) => {

  const kickAction = () => (
    props.modalControl(true),
      props.getClickRow(props.rowNumber)
  )

  return (
    <button type="button" onClick={kickAction}
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>追加情報</button>
  );
}


type CompleteButton = {
  rowNumber: number,
  formName: string[],
  control: any
  useWatch: Function
}

export const CompleteButton = (props: CompleteButton) => {
  return (
    <button type="button"
            className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>入力完了</button>
  );
}
