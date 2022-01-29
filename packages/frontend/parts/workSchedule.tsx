import React from "react"
import { format } from 'date-fns';
import { addYears, formatWithOptions } from 'date-fns/fp'
import { ja } from 'date-fns/locale'
import {clockingOut,attendance,resultTodayAttendance,restTime} from './attendance';
import {addFunction} from './attendanceFunction';
import {Span} from './style/span';

const workSchedule = (props) => {

//    const dateToString = formatWithOptions({ locale: ja }, 'YYYY/MM/DD')
    const date = new Date();

    const getEndDate = (date: Date):number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }

    const getToDay = (): String => {
       return format(new Date(), 'yyyy/MM/dd');
    }

    const week:string[] = ['日','月','火','水','木','金','土'];
    const weekUnion = week.join('|'); 
    const getDayOfWeek = (day:number):string => String(week[(new Date((new Date()).setDate(day))).getDay()]);

    const setDayOfWeekColor = (dayOfWeek,i:number):JSX.Element => {
 
        let result:JSX.Element;
        let saturday:string = week[6];
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

    // const isHoliday = () => 



    return (
        <>
        {(() => {
            let parent:Array<JSX.Element> = [];
            let items:Array<JSX.Element> = [];
            for (let i = 1; i < getEndDate(date); i++) 
            {
                items.push(<td key={'day'+i}>{i}{setDayOfWeekColor(getDayOfWeek(i),i)}</td>)
                items.push(<td key={'attendance'+i}>{attendance()}</td>)
                items.push(<td key={'laeve'+i}>{clockingOut()}</td>)
                items.push(<td key={'rest'+i}>{restTime()}</td>)
                items.push(<td key={'result'+i}>{resultTodayAttendance()}</td>)
                items.push(<td key={'addFc'+i}>{addFunction()}</td>)
                parent.push(<tr key={'key'+i}>
                    {items}
                </tr>);
                items = [];
            }
            return parent;
        })()}
        </>
    )
}


export default workSchedule;