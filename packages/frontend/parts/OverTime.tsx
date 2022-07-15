import {useEffect, useState} from 'react';
import {StartOverTime, EndOverTime, TotalOverTime} from './Modal';
import {useForm, useFieldArray, useWatch, Control} from "react-hook-form";
import {OverTimes, WorkScheduleRows, WorkSchedules} from "../lib/data/WorkSchedule";
import {getEndDate} from "../lib/CalcDate";


export const OverTime = (Props: { rowNumber: number }) => {

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
        {(() => {
          let parent: Array<JSX.Element> = [];
          for (let i: number = 0; i < Props.rowNumber; i++)
            parent.push(<div className="mt-2">
              <StartOverTime/>
              <EndOverTime/>
            </div>)
          return parent;
        })()}
        <TotalOverTime/>
      </form>
    </>


  )

}