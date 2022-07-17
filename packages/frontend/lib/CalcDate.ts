import {format} from "date-fns";


export const getEndDate = (date: Date): number => {
  return Number(format(new Date(date.getFullYear(), date.getMonth() + 1, 0), 'dd')) + 1;
}

export const getToday = (): String => {
  return format(new Date(), 'yyyy/MM/dd');
}

export const getMonth = (): string => String((new Date().getMonth() + 1));

export const getYearMonthList = (): string[] => {
  let month = Number(getMonth());
  const monthList = [];
  while (month > 0) {
    monthList.push(String(new Date().getFullYear()) + String(new Date().getMonth() - month + 2));
    month--;
  }
  return monthList.sort((x, y) => Number(y) - Number(x));
}

const isMonth = (month: number): boolean => month <= 12 && month >= 1;

const month = (month: number): number => {
  if (isMonth(month)) {
    return month;
  }
  console.log(month);
  throw new Error("月では無い値が入力されました。month");
}

export const getYearMonthDecode = (yearMonth: string): string => {
  // -((202205-5)-202205)　演算結果を反転させて月にしてる
  return String(month(-((Number(yearMonth) - Number(yearMonth.slice(-1))) - Number(yearMonth))));
}