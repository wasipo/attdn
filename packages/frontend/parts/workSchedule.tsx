import React,{useRef, useState} from 'react';
import { format } from 'date-fns';
import {ClockingOut,Attendance,ResultTodayAttendance,RestTime} from './Attendance';
import {Span} from './style/span';
import {Modal} from '../layouts/Modal'
import {WorkSchedules, KeyName, WorkScheduleRows, WorkScheduleType} from '../lib/data/WorkSchedule';
import startOfWeekYear from 'date-fns/esm/startOfWeekYear/index.js';
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import {WorkScheduleRow} from "../lib/store/WorkSchedule";
// @ts-ignore
import {AddFunction,CompleteButton} from './AttendanceFunction';
import {start} from "repl";





const WorkSchedule = () => {

    const date = new Date();

    const getEndDate = (date: Date):number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }
    const createField = ():Object[] => {
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
        setValue,
        watch,
        formState: { isValid }
    } = useForm<WorkScheduleRows>({
        defaultValues: {
            WorkScheduleRow:  createField()
        },
        mode: "onBlur"
    });

    const { fields, append, remove } = useFieldArray({
        name: "WorkScheduleRow",
        control
    });


    const watchFieldArray = watch("WorkScheduleRow");
    const controlledFields = fields.map((field, index) => {
        console.log(watchFieldArray);

        return {
            ...field,
            ...watchFieldArray[index]
        };
    });

    console.log(watchFieldArray);


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

    const onSubmit = (data: WorkScheduleRows) => console.log(data);

    return (
        <>
            {
                controlledFields.map((field, i:number) =>
                {
                    let name = ['startDate','endDate','restTime','resultTime'];
                    return (
                        <tr key={field.id}>
                            <td key={KeyName.attendance+i} className="px-6 py-4 whitespace-nowrap"><Attendance register={register} key={'at'+i} rowNumber={i} inputName={name[0]} /></td>
                            <td key={KeyName.leave+i} className="px-6 py-4 whitespace-nowrap"><ClockingOut register={register} key={'cl'+i} rowNumber={i} inputName={name[1]} /></td>
                            <td key={KeyName.rest+i} className="px-6 py-4 whitespace-nowrap"><RestTime register={register} key={'re'+i} rowNumber={i} inputName={name[2]} /></td>
                            <td key={KeyName.result+i} className="px-6 py-4 whitespace-nowrap"><ResultTodayAttendance register={register} key={'res'+i} rowNumber={i} inputName={name[3]} /></td>
                            <td key={KeyName.addFc+i} className="px-6 py-4 whitespace-nowrap"><AddFunction key={'ad'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>
                            <td key={KeyName.complete+i} className="px-6 py-4 whitespace-nowrap"><CompleteButton key={'co'+i} useWatch={useWatch} watchFieldArray={watchFieldArray} control={control} setValue={setValue} getValues={getValues} rowNumber={i} formName={name} /></td>
                        </tr>
                    );
                })
            }
            <Modal isShow={isShow} targetRow={targetRow} modalContol={modalControl} cancelButtonRef={cancelButtonRef} />
        </>
    )
}


export default WorkSchedule;