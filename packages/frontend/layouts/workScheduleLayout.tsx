import React, {useEffect, useState} from 'react';
import WorkSchedule from '../parts/WorkSchedule';
import {WorkScheduleRows, WorkSchedules} from "../lib/data/WorkSchedule";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import {getEndDate} from "../lib/CalcDate";

const WorkScheduleLayout = () => {

  const [rowData,setData] = useState([])
  const workResults:Array<string> = [];

  const date = new Date();

  const createField = ():Object[] => {
    let result = [];
    for (let i = 0; i < getEndDate(date)-1; i++)
    {
      result[i] = WorkSchedules(i+1);
    }
    return result;
  };

  const submit = (data: WorkScheduleRows) => {
    localStorage.setItem('form', JSON.stringify(data))
    reset()
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('form') as string);
    setData(localData.WorkScheduleRow);
    }, [])

  const {
    register,
    control,
    getValues,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid }
  } = useForm<WorkScheduleRows>({
    defaultValues: {
      WorkScheduleRow:  createField()
    },
    mode: "onBlur"
  });

  const { fields, append, remove } = useFieldArray({
    name: "WorkScheduleRow",
    control
  });

  const watchFieldArray = watch("WorkScheduleRow");
  console.log(watchFieldArray);
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });



  return (
      <form onSubmit={handleSubmit(submit)}>
      <button>保存</button>
      <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                    <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        日付
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        出勤時刻
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        退勤時刻
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        休憩時間
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        当日作業時間
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        残業等追加情報
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        入力終了
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                     <WorkSchedule controlledFields={controlledFields} control={control} register={register} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>

      </form>
    )

}

export default WorkScheduleLayout;