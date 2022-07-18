import {useEffect, useState} from 'react';
import {StartOverTime, EndOverTime, TotalOverTime} from './Modal';
import {useForm, useFieldArray, useWatch, Control} from "react-hook-form";
import {OverTimes, WorkScheduleRows, WorkSchedules} from "../lib/data/WorkSchedule";
import {getEndDate} from "../lib/CalcDate";


interface workSchedule {
  rowNumber: number,
  register: Function,
  inputName: string
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
      <form>
        {/*todo: ダイナミックに追加したいけど、一旦Staticで追加。*/}
        <StartOverTime rowNumber={0} register={props.register} inputName={'startOverTime0'} />
        <EndOverTime rowNumber={0} register={props.register} inputName={'startOverTime0'}/>
        <StartOverTime rowNumber={1} register={props.register} inputName={'startOverTime1'} />
        <EndOverTime rowNumber={1} register={props.register} inputName={'startOverTime1'}/>
        <StartOverTime rowNumber={2} register={props.register} inputName={'startOverTime2'} />
        <EndOverTime rowNumber={2} register={props.register} inputName={'startOverTime2'}/>
        {/*todo: 確定と同時に当日作業時間に反映させるので、Totalは一旦出さない*/}
        {/*<TotalOverTime/>*/}
      </form>
    </>


  )

}