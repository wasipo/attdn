
export class CalcTimeHour {

    private readonly hour:number;

    constructor(hour:number) {
        this.hour = hour;
    }

    public calcTimeHour () {
        return ((Number(this.hour)*60)*60);
    }

}

export const getWorkTime = (startDate: string,endDate: string,restTime: string) => {
    const [startHr,startMn] = startDate.split(':');
    const [endHr,endMn] = endDate.split(':');
    const [restHr,restMn] = restTime.split(':');
    const hr = (Number(endHr) - Number(startHr)) - Number(restHr);
    const mn = (Number(endMn) - Number(startMn)) - Number(restMn);

    return String(('00'+hr).slice(-2))+':'+String(('00'+(mn)).slice(-2));
};

export const getRawTime = (time: string) => {
    const [hr,mr] = time.split(':');
    const h:CalcTimeHour = new CalcTimeHour(Number(hr));
    const m:CalcTimeMinutes = new CalcTimeMinutes(Number(mr));
    return (h.calcTimeHour()+m.calcTimeMinutes())
}


export class CalcTimeMinutes {

    private readonly minutes:number;

    constructor(minutes:number) {
        this.minutes = minutes;
    }

    public calcTimeMinutes () {
        return ((Number(this.minutes)*60)*60);
    }

}

export const CalcTimeFormat = (time:number) => {

    const hour = ('00'+String(Math.floor(time/3600))).slice(-2);
    const minutes = ('00'+String(time % 3600/60|0)).slice(-2);

    return hour+':'+minutes;
};