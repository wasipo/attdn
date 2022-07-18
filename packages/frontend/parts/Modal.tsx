
type workSchedule = {
  rowNumber: number,
  register: Function,
  inputName: string
}

export const StartOverTime = (props: workSchedule) => {
  return (
    <div className="mt-6 block">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startOverTime">残業開始時間</label>
      <input name="startOverTime" type="text"
             className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"/>
    </div>
  )
};

export const EndOverTime = (props: workSchedule) => {
  return (
    <div className="mt-3 block">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endOverTime">残業終了時間</label>
      <input name="endOverTime" type="text"
             className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"/>
    </div>
  )
};


export const TotalOverTime = () => {
  return (
    <div className="mt-3 block">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalOverTime">合計残業時間</label>
      <input readOnly name="totalOverTime" type="text"
             className="mt-1 py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border"/>
    </div>
  )
};