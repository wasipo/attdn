import { combineReducers, configureStore, createSlice, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit'

export type WorkSchedule = {
    rowNumber: number
    startDate: string
    endDate: string
    restTime: string
    resultTime: string
};
export type WorkScheduleArray = Array<WorkSchedule>;

export type WorkScheduleState = {
    workSchedule: WorkScheduleArray
}

export type UpdateWorkSchedulePayload = WorkSchedule
export type AddWorkSchedulePayload = WorkSchedule

const getYoctoTime = (_d:Date) => {
    return new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
}

const initialState: WorkScheduleState = {
    workSchedule: [
        {
            rowNumber: 0,
            startDate: '00:00',
            endDate: '00:00',
            restTime: '00:00',
            resultTime: '00:00',
        }
    ],
}

const hogeState: number = 0;

export const WorkScheduleRow = createSlice({
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
})


export const rootReducer = combineReducers({
    workScheduleRow: WorkScheduleRow.reducer,
});
export type workScheduleRowState = ReturnType<typeof rootReducer>

export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware()];
    const store = configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });
    return store;
}
