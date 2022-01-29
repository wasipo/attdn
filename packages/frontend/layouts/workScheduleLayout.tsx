import React from 'react';
import WorkSchedule from '../parts/workSchedule';

const workScheduleLayout = () => {


    return (
        <table>
            <tbody>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <WorkSchedule />
            </tbody>
        </table>
    )

}

export default workScheduleLayout;