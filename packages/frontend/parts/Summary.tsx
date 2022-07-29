import React from 'react';


const Summary = () => {


  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 drop-shadow-sm">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-size-sm text-gray-800">総稼働日数</p>
                    <h5 className="mb-0 font-bold text-gray-800 text-xl">
                      31
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia">
                    <i className="ni ni-money-coins text-size-lg relative top-3.5 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 sm:w-1/2 sm:flex-none xl:w-1/4 drop-shadow-sm">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-size-sm text-gray-800">欠勤日数</p>
                    <h5 className="mb-0 font-bold text-gray-800 text-xl">
                      10
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia">
                    <i className="ni ni-cart text-size-lg relative top-3.5 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 drop-shadow-sm">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-size-sm text-gray-800">総稼働</p>
                    <h5 className="mb-0 font-bold text-gray-800 text-xl">
                      200
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia">
                    <i className="ni ni-world text-size-lg relative top-3.5 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 drop-shadow-sm">
          <div
            className="relative flex flex-col min-w-0 break-words bg-white shadow-soft-xl rounded bg-clip-border">
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <div>
                    <p className="mb-0 font-sans font-semibold leading-normal text-size-sm text-gray-800">時間外</p>
                    <h5 className="mb-0 font-bold text-gray-800 text-xl">
                      160
                    </h5>
                  </div>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-fuchsia">
                    <i className="ni ni-paper-diploma text-size-lg relative top-3.5 text-white"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )

}


export default Summary;