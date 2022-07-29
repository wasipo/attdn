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
  overTimes: OverTimes
};

export type OverTimes = {
    totalOverTime: string
    overTimeItems:
      {
        startOverTime: string
        endOverTime: string
      }[]
};

export type WorkScheduleData = [
  WorkScheduleRows
];

export type WorkScheduleRows = {
  yearMonth: string,
  WorkScheduleRow: WorkScheduleType[]
};

export const WorkSchedules = (row: number):WorkScheduleType =>
{
  return {
    rowNumber: row,
    startDate: '00:00',
    endDate: '00:00',
    restTime: '00:00',
    resultTime: '00:00',
    overTimes: {
      totalOverTime: '0',
      overTimeItems: [
        {
          startOverTime: '00:00',
          endOverTime: '00:00'
        },
        {
          startOverTime: '00:00',
          endOverTime: '00:00'
        },
        {
          startOverTime: '00:00',
          endOverTime: '00:00'
        }
      ]
    }
  }
}

interface formType {
  required: boolean,
  valueAsNumber: boolean,
  valueAsString: boolean
}

export const partsAttr: formType = {
  required: true,
  valueAsNumber: false,
  valueAsString: true,
}
