import React,{useState} from 'react';
import { format } from 'date-fns';
import {ClockingOut,Attendance,ResultTodayAttendance,RestTime} from './Attendance';
import {AddFunction} from './AttendanceFunction';
import {Span} from './style/span';
import {Modal} from '../layouts/Modal'

const WorkSchedule = () => {

    const [showModal,setShowModal] = useState<boolean>(false);

    const date = new Date();

    const getEndDate = (date: Date):number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }

    const getToDay = (): String => {
       return format(new Date(), 'yyyy/MM/dd');
    }

    const week = ['日','月','火','水','木','金','土'] as const;
    type WeekUnion = typeof week[number];

    const getDayOfWeek = (day:number):string => String(week[(new Date((new Date()).setDate(day))).getDay()]);
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

    return (
        <>
        {(() => {
            let parent:Array<JSX.Element> = [];
            let items:Array<JSX.Element> = [];
            for (let i = 1; i < getEndDate(date); i++) 
            {
                setDayOfWeekColor('a',i);
                items.push(<td key={'day'+i}>{i}{setDayOfWeekColor(getDayOfWeek(i),i)}</td>)
                items.push(<td key={'attendance'+i}><Attendance key={'at'+i} /></td>)
                items.push(<td key={'laeve'+i}><ClockingOut key={'cl'+i} /></td>)
                items.push(<td key={'rest'+i}><RestTime key={'re'+i} /></td>)
                items.push(<td key={'result'+i}><ResultTodayAttendance key={'res'+i} /></td>)
                items.push(<td key={'addFc'+i}><AddFunction key={'ad'+i} modalControl={modalControl} /></td>)
                parent.push(<tr key={'key'+i}>
                    {items}
                </tr>);
                items = [];
            }
            return parent;
        })()}
        <Modal showFlag={showModal} modalContol={modalControl} />
        </>
    )
}


export default WorkSchedule;