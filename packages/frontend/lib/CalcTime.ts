
export class CalcTimeHour {

    private readonly hour:number;

    constructor(hour:number) {
        this.hour = hour;
    }

    public calcTimeHour () {
        return ((Number(this.hour)*60)*60);
    }

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