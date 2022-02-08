import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WorkScheduleRow, workScheduleRowState } from '../lib/store/WorkSchedule';
// @ts-ignore
import WorkSchedule from '../parts/WorkSchedule';


const WorkScheduleLayout = () => {
  const dispatch = useDispatch();
  const workScheduleRow = useSelector((state:workScheduleRowState) => state.workScheduleRow);

  const handleInsert = (row: number) => {
    dispatch(
        WorkScheduleRow.actions.addWorkSchedule({
            rowNumber: row,
            startDate: '00:00',
            endDate: '00:00',
            restTime: '00:00',
            resultTime: '00:00'   
        })
      )
      console.log(workScheduleRow);
  }
  const handleReset = () => {
      dispatch(WorkScheduleRow.actions.reset());
  }   
  
    return (
        <div className="flex flex-col">
          <form>
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
                       <WorkSchedule />
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </form>
      </div>
    )

}

export default WorkScheduleLayout;