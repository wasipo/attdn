import {partsAttr} from "../lib/data/WorkSchedule";

type workSchedule = {
  rowNumber: number,
  register: Function,
  inputName: string
}

type workScheduleWithResult = {
  rowNumber: number,
  register: Function,
  inputName: string
  workTime: string,
}


export const Attendance = (props: workSchedule) => {

  return (
    <input name={props.inputName} type="text"
           className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
           {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const, partsAttr)}
    />
  )
}

export const ClockingOut = (props: workSchedule) => {

  return (
    <input name={props.inputName} type="text"
           className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
           {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const, partsAttr)}
    />
  )
}

export const RestTime = (props: workSchedule) => {

  return (
    <input name={props.inputName} type="text"
           className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
           {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const, partsAttr)}
    />
  )
}

export const ResultTodayAttendance = (props: workScheduleWithResult) => {

  return (
    <input name={props.inputName} type="text"
           className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
           {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const, partsAttr)}
           value={props.workTime}
    />
  )
}