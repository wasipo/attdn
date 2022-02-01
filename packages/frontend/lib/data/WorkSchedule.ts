
const created = 3;


export const KeyName = {
    'day': 'day',
    'attendance': 'attendance',
    'leave': 'leave',
    'rest': 'rest',
    'result': 'result',
    'addFc': 'addFc',
    'scheduleParent': 'scheduleParent'
}


export const WorkSchedules = (row:number) => {
    return {
        'rowNumber' : row,
        'startDate' : '00:00',
        'endDate' : '00:00',
        'restTime' : '00:00',
    }
}

export const OverTimes = (row:number) => {
    return {
        'rowNumber' : row,
        'startDate' : '00:00',
        'endDate' : '00:00',
        'arrow' : created,
    }
}
