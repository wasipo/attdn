import {useEffect, useState} from 'react';
import {StartOverTime, EndOverTime, TotalOverTime} from './Modal';
import {useForm, useFieldArray, useWatch, Control} from "react-hook-form";
import {OverTimes, WorkScheduleRows, WorkSchedules, WorkScheduleType} from "../lib/data/WorkSchedule";
import {getEndDate} from "../lib/CalcDate";
import workSchedule from "./WorkSchedule";


interface workSchedule {
  rowNumber: number,
  register: Function,
  workScheduleType: WorkScheduleType,
  fields: WorkScheduleType[]
}


export const OverTime = (props:workSchedule) => {



  const overTimeItems = props.fields[props.rowNumber].overTimes.overTimeItems;

  return (
    <>
      {
        overTimeItems.map((item,index) => {

          return (
            <>
              <StartOverTime rowNumber={props.rowNumber} register={props.register} inputName={'startOverTime'} key={'st'+index} fieldRowNumber={index} />
              <EndOverTime rowNumber={props.rowNumber} register={props.register} inputName={'startOverTime'} key={'en'+index} fieldRowNumber={index} />
            </>
          )

        })
      }
    </>


  )

}