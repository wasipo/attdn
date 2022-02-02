import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type WorkSchedule = {
    rowNumber: number
    startDate: Date
    endDate: Date
    restTime: string
};
export type WorkScheduleArray = Array<WorkSchedule>;

export type OverTIme = {
    rowNumber: number
    startDate: Date
    endDate: Date
    slot: number
    arrow: boolean
}

export type WorkScheduleState = {
    workSchedule: WorkScheduleArray
}

export type UpdateWorkSchedulePayload = WorkSchedule
export type AddWorkSchedulePayload = WorkSchedule

const getYoctoTime = (_d:Date) => {
    return new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
}

const initialState: WorkScheduleState = {
    workSchedule: [{
        rowNumber: 1,
        startDate: getYoctoTime(new Date()),
        endDate: getYoctoTime(new Date()),
        restTime: '00:00',
    }],
}

export const WorkScheduleSlice = createSlice({
    name: 'workSchedule',
    initialState,
    // HACK: reducerは肥大化したらファイル分けたくなるかも
    reducers: {
    //   updateUser(state, action: PayloadAction<UpdateUserPayload>) {
    //     state.workSchedule = action.payload
    //   },
        addWorkSchedule(state, action: PayloadAction<AddWorkSchedulePayload>) {
        state.workSchedule.push(action.payload)
        },
        reset(): WorkScheduleState {
        return initialState
        },
    },
});






