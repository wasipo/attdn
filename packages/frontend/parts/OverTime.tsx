import { useState } from 'react';
import {StartOverTime,EndOverTime} from '../parts/Modal';

export const OverTime = (Props:{rowNumber: number}) => {

    return (
        <>
        {(() => {
            let parent:Array<JSX.Element> = [];
            for(let i:number = 0; i < Props.rowNumber; i++)
                parent.push(<div className="mt-2">
                    <StartOverTime />
                    <EndOverTime />
                </div>)
            return parent;
        })()}
        </>


    )

}