
type workSchedule = {
    rowNumber : number,
    register: Function
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

    const registerKey = "attendance"+props.rowNumber;
    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={registerKey} type="text"
               className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...() => props.register(registerKey,partsAttr)}
        />
    )
}

export const ClockingOut = (props:workSchedule) => {

    const registerKey = "clockingOut"+props.rowNumber;
    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={"clockingOut"+props.rowNumber} type="text"
               className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...() => props.register(registerKey,partsAttr)}
        />
    )
}

export const RestTime = (props:workSchedule) => {

    const registerKey = "restTime"+props.rowNumber;
    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={"restTime"+props.rowNumber} type="text"
               className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...() => props.register(registerKey,partsAttr)}
        />
    )
}

export const ResultTodayAttendance = (props:workSchedule) => {

    const registerKey = "resultTodayAttendance"+props.rowNumber;
    const partsAttr:formType = {
        required: true,
        valueAsNumber: false,
        valueAsString:  true,
    }

    return (
        <input name={"resultTodayAttendance"+props.rowNumber} type="text"
               className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"
               {...() => props.register(registerKey,partsAttr)}
        />
    )
}