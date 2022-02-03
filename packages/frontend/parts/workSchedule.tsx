import React,{useRef, useState} from 'react';
import { format } from 'date-fns';
import {ClockingOut,Attendance,ResultTodayAttendance,RestTime} from './Attendance';
import {AddFunction,CompleteButton} from './AttendanceFunction';
import {Span} from './style/span';
import {Modal} from '../layouts/Modal'
import {WorkSchedules,KeyName} from '../lib/data/WorkSchedule';
import startOfWeekYear from 'date-fns/esm/startOfWeekYear/index.js';
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    example: string,
    exampleRequired: string,
  };

const WorkSchedule = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    
    type WeekUnion = typeof week[number];
    const week = ['日','月','火','水','木','金','土'] as const;

    const [isShow,setShowModal] = useState<boolean>(false);
    const [targetRow,setRow] = useState<number>(0);
    const cancelButtonRef = useRef(null);

    const date = new Date();

    const getEndDate = (date: Date):number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }

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
        {(() => {
            let parent:Array<JSX.Element> = [];
            let items:Array<JSX.Element> = [];
            for (let i = 1; i < getEndDate(date); i++) 
            {
                // handleInsert(i+1);
                // console.log('cc',workScheduleRow);
                let rowData:Array<Object> = [WorkSchedules(i)];
                items.push(<td key={KeyName.day+rowData[i]} className="px-6 py-4 whitespace-nowrap">{i}{setDayOfWeekColor(getDayOfWeek(i),i)}</td>)
                items.push(<td key={KeyName.attendance+rowData[i]} className="px-6 py-4 whitespace-nowrap"><Attendance key={'at'+i} rowNumber={i} /></td>)
                items.push(<td key={KeyName.leave+rowData[i]} className="px-6 py-4 whitespace-nowrap"><ClockingOut key={'cl'+i} rowNumber={i} /></td>)
                items.push(<td key={KeyName.rest+rowData[i]} className="px-6 py-4 whitespace-nowrap"><RestTime key={'re'+i} rowNumber={i} /></td>)
                items.push(<td key={KeyName.result+rowData[i]} className="px-6 py-4 whitespace-nowrap"><ResultTodayAttendance key={'res'+i} rowNumber={i} /></td>)
                items.push(<td key={KeyName.addFc+rowData[i]} className="px-6 py-4 whitespace-nowrap"><AddFunction key={'ad'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>)
                items.push(<td key={KeyName.addFc+rowData[i]} className="px-6 py-4 whitespace-nowrap"><CompleteButton key={'ad'+i} modalControl={modalControl} getClickRow={getClickRow} rowNumber={i} /></td>)
                parent.push(<tr key={'key'+i}>
                    {items}
                </tr>);
                items = [];
            }
            return parent;
        })()}
        <Modal isShow={isShow} targetRow={targetRow} modalContol={modalControl} cancelButtonRef={cancelButtonRef} />
        </>
    )
}


export default WorkSchedule;