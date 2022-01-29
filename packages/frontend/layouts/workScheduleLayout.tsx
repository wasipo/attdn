import React from 'react';
import WorkSchedule from '../parts/WorkSchedule';

const WorkScheduleLayout = () => {


    return (
        <table>
            <tbody>
                <tr>
                    <th>日付</th>
                    <th>開始時刻</th>
                    <th>退勤時刻</th>
                    <th>休憩時間</th>
                    <th>勤務時間</th>
                    <th>残業等追加情報</th>
                </tr>
                <WorkSchedule />
            </tbody>
        </table>
    )

}

export default WorkScheduleLayout;