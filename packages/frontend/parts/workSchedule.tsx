import React,{useRef, useState} from 'react';
import { format } from 'date-fns';
import {ClockingOut,Attendance,ResultTodayAttendance,RestTime} from './Attendance';
import {AddFunction,CompleteButton} from './AttendanceFunction';
import {Span} from './style/span';
import {Modal} from '../layouts/Modal'
import {WorkSchedules, KeyName, WorkScheduleRows, WorkScheduleType} from '../lib/data/WorkSchedule';
import startOfWeekYear from 'date-fns/esm/startOfWeekYear/index.js';
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import {WorkScheduleRow} from "../lib/store/WorkSchedule";



type w = {
    WorkScheduleRow: {
        rowNumber: number
        startDate: string
        endDate: string
        restTime: string
        resultTime: string
    }[]
};

const WorkSchedule = () => {

    const date = new Date();

    const getEndDate = (date: Date):number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }
    const createField = ():any => {
        let result = [];
        for (let i = 0; i < getEndDate(date)-1; i++)
        {
            result[i] = WorkSchedules(i+1);
        }

        return result;
    };

    const {
        register,
        control,
        getValues,
        handleSubmit,
        watch,
        formState: { isValid }
    } = useForm<w>({
        defaultValues: {
            WorkScheduleRow: createField()
        },
        mode: "onBlur"
    });


    const { fields, append, remove } = useFieldArray({
        name: "WorkScheduleRow",
        control
    });
    const watchFieldArray = watch("WorkScheduleRow");

    const controlledFields = fields.map((field, index) => {
        return {
            ...field,
            ...watchFieldArray[index]
        };
    });

    type WeekUnion = typeof week[number];
    const week = ['日','月','火','水','木','金','土'] as const;

    const [isShow,setShowModal] = useState<boolean>(false);
    const [targetRow,setRow] = useState<number>(0);
    const cancelButtonRef = useRef(null);

    const getToday = (): String => {
       return format(new Date(), 'yyyy/MM/dd');
    }

    const getUUID = (): string => {
        const strong = 1000;
        return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
    }

    const getDayOfWeek = (day:number):WeekUnion => week[(new Date((new Date()).setDate(day))).getDay()];
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
                    return (
                        <tr key={field.id}>
                            <td key={KeyName.day+i} className="px-6 py-4 whitespace-nowrap">{watchFieldArray[i].rowNumber}{setDayOfWeekColor(getDayOfWeek(i),i)}</td>
                            <td key={KeyName.attendance+i} className="px-6 py-4 whitespace-nowrap"><Attendance key={'at'+i} rowNumber={i} /></td>
                            <td key={KeyName.leave+i} className="px-6 py-4 whitespace-nowrap"><ClockingOut key={'cl'+i} rowNumber={i} /></td>
                            <td key={KeyName.rest+i} className="px-6 py-4 whitespace-nowrap"><RestTime key={'re'+i} rowNumber={i} /></td>
                            <td key={KeyName.result+i} className="px-6 py-4 whitespace-nowrap"><ResultTodayAttendance key={'res'+i} rowNumber={i} /></td>
                            <td key={KeyName.addFc+i} className="px-6 py-4 whitespace-nowrap"><AddFunction key={'ad'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>
                            <td key={KeyName.complete+i} className="px-6 py-4 whitespace-nowrap"><CompleteButton key={'co'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>
                        </tr>
                    );
                })
            }
        <Modal isShow={isShow} targetRow={targetRow} modalContol={modalControl} cancelButtonRef={cancelButtonRef} />
        </>
    )
}


export default WorkSchedule;