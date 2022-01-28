import React from "react"
import { format } from 'date-fns';
import { addYears, formatWithOptions } from 'date-fns/fp'
import { ja } from 'date-fns/locale'


const workSchedule = (props) => {

    const dateToString = formatWithOptions({ locale: ja }, 'YYYY/MM/DD')

    const getToDay = (): String => {
       return format(new Date(), 'yyyy/MM/dd');
    }

    return (
        <div>
            <div>{ getToDay() }</div>
        </div>
    )
}


export default workSchedule;