import {Control} from "react-hook-form";

type workSchedule = {
    rowNumber : number,
    register: Function,
    inputName: string
}

type attendance = {
    rowNumber : number,
    register: Function
}

interface formType {
    required: boolean,
    valueAsNumber: boolean,
    valueAsString: boolean
}

export const Attendance = (props:workSchedule) => {

    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    // console.log("11")
    // console.log(`WorkScheduleRows.${props.rowNumber}.${props.inputName}`);

    return (
        <input name={props.inputName} type="text"
               className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const,partsAttr)}
        />
    )
}

export const ClockingOut = (props:workSchedule) => {

    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={props.inputName} type="text"
               className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const,partsAttr)}
        />
    )
}

export const RestTime = (props:workSchedule) => {

    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={props.inputName} type="text"
               className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const,partsAttr)}
        />
    )
}

export const ResultTodayAttendance = (props:workSchedule) => {

    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={props.inputName} type="text"
               className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...props.register(`WorkScheduleRow.${props.rowNumber}.${props.inputName}` as const,partsAttr)}
        />
    )
}