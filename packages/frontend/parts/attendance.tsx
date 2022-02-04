
type workSchedule = {
    rowNumber : number,
}

export const Attendance = (props:workSchedule) => {
    return (
        <input type="text" className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border" />
    )
}

export const ClockingOut = (props:workSchedule) => {
    return (
        <input type="text" className="mt-1 py-2 px-3  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border" />
    )
}

export const RestTime = (props:workSchedule) => {
    return (
        <input type="text" className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border" />
    )
}

export const ResultTodayAttendance = (props:workSchedule) => {
    return (
        <input type="text" className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border" />
    )
}