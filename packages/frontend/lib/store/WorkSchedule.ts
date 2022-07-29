import { combineReducers, configureStore, createSlice, getDefaultMiddleware, PayloadAction } from '@reduxjs/toolkit'
import {WorkScheduleType} from '../data/WorkSchedule'

export type WorkScheduleArray = Array<WorkScheduleType>;

export type WorkScheduleState = {
    workSchedule: WorkScheduleArray
}

const getYoctoTime = (_d:Date) => {
    return new Date(_d.getFullYear(), _d.getMonth(), _d.getDate(), 0, 0, 0);
}

const initialState: WorkScheduleState = {
    workSchedule: [

    ],
}

export const WorkScheduleRow = createSlice({
    name: 'workSchedule',
    initialState,
    // HACK: reducerは肥大化したらファイル分けたくなるかも
    reducers: {
    //   updateUser(state, action: PayloadAction<UpdateUserPayload>) {
    //     state.workSchedule = action.payload
    //   },
        addWorkSchedule(state, action: PayloadAction<WorkScheduleType>) {
            void state.workSchedule.push(action.payload)
        },

        reset(): WorkScheduleState {
            return initialState
        },
    },
})

export const rootReducer = combineReducers({
    workScheduleRow: WorkScheduleRow.reducer,
});

export const setupStore = () => {
    const middlewares = [...getDefaultMiddleware()];
    return configureStore({
        reducer: rootReducer,
        middleware: middlewares,
    });
}
