import React from "react"
import { format } from 'date-fns';
import { addYears, formatWithOptions } from 'date-fns/fp'
import { ja } from 'date-fns/locale'


const workSchedule = (props) => {

    const dateToString = formatWithOptions({ locale: ja }, 'YYYY/MM/DD')
    const date = new Date();

    const getEndDate = (date: Date):Number =>  {
        return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
    }

    const getToDay = (): String => {
       return format(new Date(), 'yyyy/MM/dd');
    }

    const getTodayWeek = () => {
        // console.log(Date.)
    }

    // const setRowDate = (date:Date) => {
    //     let result:Array<JSX.Element | null> = [];
    //     for(let i =0; i<getEndDate(date); i++) {
    //         result.push(<td>i</td><td></td><td></td><td></td>)
    //     }
    //     return result;
    // }

    return (
        <>
        {(() => {
            let parent:Array<JSX.Element> = [];
            let items:Array<JSX.Element> = [];
            for (let i = 1; i < getEndDate(date); i++) 
            {
                items.push(<td>{i}</td>)
                items.push(<td>{'aaaaa'}</td>)
                items.push(<td>{'ccccc'}</td>)
                items.push(<td>{'bbbbb'}</td>)
                parent.push(<tr>
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