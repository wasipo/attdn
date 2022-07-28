import {useEffect, useState} from 'react';
import {StartOverTime, EndOverTime, TotalOverTime} from './Modal';
import {useForm, useFieldArray, useWatch, Control} from "react-hook-form";
import {OverTimes, WorkScheduleRows, WorkSchedules, WorkScheduleType} from "../lib/data/WorkSchedule";
import {getEndDate} from "../lib/CalcDate";
import workSchedule from "./WorkSchedule";


interface workSchedule {
  rowNumber: number,
  register: Function,
  workScheduleType: WorkScheduleType
}


export const OverTime = (props:workSchedule) => {


  // const createField = ():Object[] => {
  //     let result = [];
  //
  //     return result;
  // };


  // useEffect(() => {
  //     const localFormData = localStorage.getItem('modal') as string;
  //     if(localFormData) {
  //         setData(true);
  //         reset(JSON.parse(localFormData));
  //     }
  // }, [setData,reset])

  // const {
  //     register,
  //     control,
  //     getValues,
  //     reset,
  //     handleSubmit,
  //     setValue,
  //     watch,
  //     formState: { isValid }
  // } = useForm<OverTimes>({
  //     defaultValues: {
  //         overTimes:  createField()
  //     },
  //     mode: "onBlur"
  // });

  // modal毎に永続化する必要がある



  return (
    <>
        <StartOverTime rowNumber={props.rowNumber} register={props.register} inputName={'startOverTime'} />
        <EndOverTime rowNumber={props.rowNumber} register={props.register} inputName={'startOverTime0'} />
    </>


  )

}