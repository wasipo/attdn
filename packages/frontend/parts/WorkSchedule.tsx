import React,{useRef, useState} from 'react';
import { format } from 'date-fns';
import {ClockingOut,Attendance,ResultTodayAttendance,RestTime} from './Attendance';
import {Span} from './style/span';
import {Modal} from '../layouts/Modal'
import {WorkSchedules, KeyName, WorkScheduleRows, WorkScheduleType} from '../lib/data/WorkSchedule';
import {WorkScheduleArray, WorkScheduleRow} from "../lib/store/WorkSchedule";
import {AddFunction,CompleteButton} from './AttendanceFunction';
import {CalcTimeHour, CalcTimeMinutes, CalcTimeFormat, getWorkTime} from "../lib/CalcTime";
import {WeekUnion,week,getDayOfWeek} from "../lib/Week";
import {Control, useWatch} from "react-hook-form";


const ResultAttendanceTime = ({control}:{control: Control<WorkScheduleRows>}) => {
    const formValues = useWatch({
        name: "WorkScheduleRow",
        control
    });


    const time = formValues.reduce(
        (prev,{resultTime}) => {
            const [hr,mr] = resultTime.split(':');
            const h:CalcTimeHour = new CalcTimeHour(Number(hr));
            const m:CalcTimeMinutes = new CalcTimeMinutes(Number(mr));
            return prev+(h.calcTimeHour()+m.calcTimeMinutes())
        },0
    );
    const total = CalcTimeFormat(time);
    return (
        <div>
            {total}
        </div>
    )
}

    type parentSchedule = {
        controlledFields: {
            rowNumber: number
            startDate: string
            endDate: string
            restTime: string
            resultTime: string
        }[]
        control: any
        register:any
    }


const WorkSchedule = (props:parentSchedule) => {


    /**
     * Modalからのデータを保存しておく変数が必要、本日の合計時間を計算するために
     **/



    const controlledFields = props.controlledFields;
    const register = props.register;
    const control = props.control;


    const [isShow,setShowModal] = useState<boolean>(false);
    const [targetRow,setRow] = useState<number>(0);
    const cancelButtonRef = useRef(null);

    const setDayOfWeekColor = (dayOfWeek: WeekUnion,i:number):JSX.Element => {

        let result:JSX.Element;
        let saturday:string = week[week.length-1];
        let sunday:string = week[0];

        switch(dayOfWeek) {
            case saturday:
                result = <Span key={'saturday'+i} color={'blue'}>({saturday})</Span>
                break;
            case sunday:
                result = <Span key={'saturday'+i} color={'red'}>({sunday})</Span>
                break;
            default:
                result = <span key={'saturday'+i}>({dayOfWeek})</span>
                break;
        }

        return result;
    }

    const modalControl = (isState:boolean) => setShowModal(isState)
    const getClickRow = (rowNumber:number) => setRow(rowNumber)

    return (
        <>
            {
                controlledFields.map((field, i:number) =>
                {
                    let name = ['startDate','endDate','restTime','resultTime'];

                    return (
                        <tr key={'tr'+i}>
                            <td key={KeyName.day+i} className="px-6 py-4 whitespace-nowrap">{field.rowNumber}{setDayOfWeekColor(getDayOfWeek(i),i)}</td>
                            <td key={KeyName.attendance+i} className="px-6 py-4 whitespace-nowrap"><Attendance register={register} key={'at'+i} rowNumber={i} inputName={name[0]} /></td>
                            <td key={KeyName.leave+i} className="px-6 py-4 whitespace-nowrap"><ClockingOut register={register} key={'cl'+i} rowNumber={i} inputName={name[1]} /></td>
                            <td key={KeyName.rest+i} className="px-6 py-4 whitespace-nowrap"><RestTime register={register} key={'re'+i} rowNumber={i} inputName={name[2]} /></td>
                            <td key={KeyName.result+i} className="px-6 py-4 whitespace-nowrap"><ResultTodayAttendance register={register} key={'res'+i} rowNumber={i} inputName={name[3]} workTime={getWorkTime(field.startDate,field.endDate,field.restTime)} /></td>
                            <td key={KeyName.addFc+i} className="px-6 py-4 whitespace-nowrap"><AddFunction key={'ad'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>
                            <td key={KeyName.complete+i} className="px-6 py-4 whitespace-nowrap"><CompleteButton key={'co'+i} useWatch={useWatch} control={control} rowNumber={i} formName={name} /></td>
                        </tr>
                    );
                })
            }
            <Modal isShow={isShow} targetRow={targetRow} modalContol={modalControl} cancelButtonRef={cancelButtonRef} />
            <ResultAttendanceTime control={control} />
        </>
    )
}


export default WorkSchedule;