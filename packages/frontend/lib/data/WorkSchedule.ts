
const created = 3;


export const KeyName = {
    'day': 'day',
    'attendance': 'attendance',
    'leave': 'leave',
    'rest': 'rest',
    'result': 'result',
    'addFc': 'addFc',
    'complete': 'complete',
    'scheduleParent': 'scheduleParent'
}

export type WorkScheduleType = {
    rowNumber: number
    startDate: string
    endDate: string
    restTime: string
    resultTime: string
};


export type WorkScheduleRows = {
    WorkScheduleRow: {
        rowNumber: number
        startDate: string
        endDate: string
        restTime: string
        resultTime: string
    }[]
};

export type OverTimes = {
        overTimes: {
            totalOverTime: number
            overTimes: [
                {
                    startOverTime: number
                    endOverTime: string
                }
            ]
        }
};



export const WorkSchedules = (row:number):WorkScheduleType => {
    return {
        'rowNumber' : row,
        'startDate' : '00:00',
        'endDate' : '00:00',
        'restTime' : '00:00',
        'resultTime': '00:00'
    }
}

// export const OverTimes = (row:number) => {
//     return {
//         'rowNumber' : row,
//         'startOverTime' : '00:00',
//         'endOverTime' : '00:00',
//         'arrow' : created,
//     }
// }
