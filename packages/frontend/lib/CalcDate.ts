import {format} from "date-fns";


export const getEndDate = (date: Date):number =>  {
    return Number(format(new Date(date.getFullYear(),date.getMonth()+1,0), 'dd'))+1;
}

export const getToday = (): String => {
    return format(new Date(), 'yyyy/MM/dd');
}
