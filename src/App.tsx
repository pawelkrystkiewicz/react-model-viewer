import { useMemo } from 'react'
import { v4 as getId } from 'uuid'
import { MainScene } from './components/scene'
import { Sidebar } from './components/scene/Sidebar'

function App() {
  // usememo
  const id = useMemo(() => getId(), [])

  return (
    <div className="w-full h-full flex">
      <div className="absolute top-0 left-0 z-10 p-10">
        <div className="flex-col justify-between items-start gap-[26px] inline-flex">
          <div className="text-gray-600 text-[13px] font-normal leading-tight">{id}</div>
          <div className="text-gray-100 text-[50px] font-bold uppercase leading-tight">HERO</div>
          <div className="justify-start items-start gap-[21px] inline-flex">
            <div className="justify-center items-center gap-1 flex">
              <div className="text-gray-300 text-sm font-normal leading-tight">length</div>
              <div className="text-gray-400 text-sm font-bold leading-tight">278</div>
              <div className="text-gray-300 text-sm font-normal leading-tight">mm</div>
            </div>
            <div className="justify-center items-center gap-[5px] flex">
              <div className="text-gray-300 text-sm font-normal leading-tight">parts</div>
              <div className="text-gray-400 text-sm font-bold leading-tight">10</div>
            </div>
            <div className="justify-center items-center gap-1 flex">
              <div className="text-gray-300 text-sm font-normal leading-tight">lead time</div>
              <div className="text-gray-400 text-sm font-bold leading-tight">24</div>
              <div className="text-gray-300 text-sm font-normal leading-tight">days</div>
            </div>
          </div>
        </div>
      </div>

      <MainScene />
      <Sidebar>
        <div className="text-gray-50 text-[25px] font-bold leading-tight">Lightsaber Configuration</div>
        <>
          <div className="w-full h-[147px] relative">
            <div className="left-0 top-0 absolute text-gray-100 text-sm font-normal leading-normal">Type</div>
            <div className="w-full h-[121px] left-0 top-[26px] absolute justify-start items-end gap-[18px] inline-flex">
              <div className="w-[121px] h-[121px] relative">
                <div className="w-[121px] h-[121px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="origin-top-left rotate-[-43.42deg] w-[104.11px] h-[15.87px] left-[16px] top-[79.56px] absolute">
                  <div className="w-[15.87px] h-[29.25px] left-[33.99px] top-[-32.16px] absolute origin-top-left rotate-[46.58deg] bg-gray-200" />
                  <div className="w-[11.55px] h-[39.51px] left-[64.46px] top-[-58.16px] absolute origin-top-left rotate-[46.58deg] bg-gray-200" />
                  <div className="w-3.5 h-[16.38px] left-[76.14px] top-[-71.01px] absolute origin-top-left rotate-[46.58deg] bg-gray-200" />
                  <div className="w-3.5 h-[16.38px] left-[12.41px] top-[-10.71px] absolute origin-top-left rotate-[46.58deg] bg-gray-200" />
                </div>
                <div className="left-[23px] top-[92px] absolute text-gray-100 text-base font-medium leading-normal">
                  Standard
                </div>
              </div>

              <div className="w-[121px] h-[121px] relative">
                <div className="w-[121px] h-[121px] left-0 top-0 absolute bg-gray-700 rounded-[14px] border border-blue-500" />
                <div className="origin-top-left rotate-[-46.15deg] w-[98.79px] h-[12.35px] left-[21px] top-[81.25px] absolute">
                  <div className="w-[12.35px] h-[25.73px] left-[28.52px] top-[-29.69px] absolute origin-top-left rotate-[43.85deg] bg-gray-200" />
                  <div className="w-[12.35px] h-[31.90px] left-[52.04px] top-[-54.18px] absolute origin-top-left rotate-[43.85deg] bg-gray-200" />
                  <div className="w-[4.12px] h-[6.17px] left-[60px] top-[-56.52px] absolute origin-top-left rotate-[43.85deg] bg-gray-200" />
                  <div className="w-[12.35px] h-[14.41px] left-[68.44px] top-[-71.25px] absolute origin-top-left rotate-[43.85deg] bg-gray-200" />
                  <div className="w-[12.35px] h-[14.41px] left-[9.98px] top-[-10.39px] absolute origin-top-left rotate-[43.85deg] bg-gray-200" />
                </div>
                <div className="left-[22px] top-[90px] absolute text-gray-100 text-base font-medium leading-normal">
                  Thin-neck
                </div>
              </div>
              <div className="w-[121px] h-[121px] relative">
                <div className="w-[121px] h-[121px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="origin-top-left rotate-[-47.21deg] w-[94.58px] h-[12.75px] left-[33.31px] top-[85.69px] absolute">
                  <div className="w-[12.75px] h-[26.57px] left-[28.87px] top-[-31.20px] absolute origin-top-left rotate-[42.79deg] bg-gray-700" />
                  <div className="w-[12.75px] h-[32.94px] left-[52.70px] top-[-56.93px] absolute origin-top-left rotate-[42.79deg] bg-gray-700" />
                  <div className="w-[12.75px] h-[14.88px] left-[64.25px] top-[-69.41px] absolute origin-top-left rotate-[42.79deg] bg-gray-700" />
                  <div className="w-[12.75px] h-[14.88px] left-[10.11px] top-[-10.92px] absolute origin-top-left rotate-[42.79deg] bg-gray-700" />
                </div>
                <div className="origin-top-left rotate-[-46.85deg] w-[100.47px] h-[13.55px] left-[12.38px] top-[84.14px] absolute">
                  <div className="w-[13.55px] h-[28.22px] left-[30.88px] top-[-32.95px] absolute origin-top-left rotate-[43.15deg] bg-gray-200" />
                  <div className="w-[13.55px] h-[35px] left-[56.36px] top-[-60.13px] absolute origin-top-left rotate-[43.15deg] bg-gray-200" />
                  <div className="w-[13.55px] h-[15.80px] left-[68.71px] top-[-73.31px] absolute origin-top-left rotate-[43.15deg] bg-gray-200" />
                  <div className="w-[13.55px] h-[15.80px] left-[10.81px] top-[-11.53px] absolute origin-top-left rotate-[43.15deg] bg-gray-200" />
                </div>
                <div className="left-[42px] top-[90px] absolute text-gray-100 text-base font-medium leading-normal">
                  Staff
                </div>
              </div>
            </div>
          </div>
          <div className="w-[396px] h-[311px] flex-col justify-between items-start gap-4 flex">
            <div className="self-stretch h-11 flex-col justify-start items-start flex">
              <div className="self-stretch text-gray-700 text-sm font-normal leading-normal">Core</div>
              <div className="self-stretch text-gray-500 text-xs font-normal leading-tight">
                Select chassis for your lightsaber
              </div>
            </div>
            <div className="w-[344px] justify-between items-center gap-2.5 inline-flex">
              <div className="w-[50px] h-[11px]" />
              <div className="text-blue-500 text-[13px] font-normal leading-tight">Show requirements</div>
            </div>
            <div className="self-stretch h-60 flex-col justify-start items-start gap-4 flex">
              <div className="w-[344px] justify-between items-center gap-2.5 inline-flex">
                <div className="h-5 justify-start items-center gap-2 flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-700" />
                  <div className="text-gray-200 text-sm font-normal leading-tight">Type A</div>
                </div>
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="w-8 h-8 relative">
                    <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                    <div className="w-6 h-6 left-[4px] top-[4px] absolute" />
                  </div>
                </div>
              </div>
              <div className="w-[344px] justify-between items-center gap-[27px] inline-flex">
                <div className="h-5 justify-start items-center gap-2 flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-700" />
                  <div className="text-gray-200 text-sm font-normal leading-tight">Type B</div>
                </div>
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                  <div className="w-6 h-6 left-[4px] top-[4px] absolute" />
                </div>
              </div>
              <div className="w-[344px] justify-between items-center gap-[27px] inline-flex">
                <div className="h-5 justify-start items-center gap-2 flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-700" />
                  <div className="text-gray-700 text-sm font-normal leading-tight">Type C</div>
                </div>
                <div className="w-8 h-8 relative">
                  <div className="w-8 h-8 left-0 top-0 absolute bg-zinc-300 rounded-full" />
                  <div className="w-6 h-6 left-[4px] top-[4px] absolute" />
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-4 h-5 justify-center items-center flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-700" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-tight">Custom</div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">+$100</div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-4 h-5 justify-center items-center flex">
                  <div className="w-4 h-4 relative bg-white rounded-lg border border-gray-700" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
                  <div className="self-stretch text-gray-700 text-sm font-medium leading-tight">None</div>
                  <div className="self-stretch text-gray-500 text-sm font-normal leading-tight">-$50</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[7px] flex">
            <div className="text-gray-100 text-sm font-normal leading-normal">Wheatering options</div>
            <div className="w-[396px] h-[25px] justify-between items-start gap-[19px] inline-flex">
              <div className="w-[72px] h-[25px] relative">
                <div className="w-[72px] h-[25px] left-0 top-0 absolute bg-gray-700 rounded-[3px] border border-blue-500" />
                <div className="left-[8px] top-[0.78px] absolute text-gray-100 text-base font-normal leading-normal">
                  Pristine
                </div>
              </div>
              <div className="w-[79.33px] h-[25px] relative">
                <div className="w-[79.33px] h-[25px] left-0 top-0 absolute bg-gray-700 rounded-[3px]" />
                <div className="left-[4.44px] top-[0.78px] absolute text-gray-50 text-base font-normal leading-normal">
                  Well kept
                </div>
              </div>
              <div className="w-[60px] h-[25px] relative">
                <div className="w-[60px] h-[25px] left-0 top-0 absolute bg-gray-700 rounded-[3px]" />
                <div className="left-[9.56px] top-[0.78px] absolute text-gray-50 text-base font-normal leading-normal">
                  Worn
                </div>
              </div>
              <div className="w-[66px] h-[25px] relative">
                <div className="w-[66px] h-[25px] left-0 top-0 absolute bg-gray-700 rounded-[3px]" />
                <div className="w-[58px] h-[22px] left-[4px] top-[1.78px] absolute text-gray-50 text-base font-normal leading-normal">
                  Ancient
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[126px] relative">
            <div className="left-0 top-0 absolute text-gray-50 text-sm font-normal leading-normal">Parts (10)</div>
            <div className="w-full h-[97px] left-0 top-[29px] absolute justify-between items-start gap-[11px] inline-flex">
              <div className="w-[57px] h-[97px] relative">
                <div className="w-[57px] h-[97px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="w-6 h-[10.87px] left-[34.87px] top-[23px] absolute origin-top-left rotate-90 bg-gray-200" />
                <div className="w-9 h-[18px] left-[11px] top-[69px] absolute text-gray-100 text-base font-medium leading-normal">
                  P.75
                </div>
              </div>
              <div className="w-[91px] h-[97px] relative">
                <div className="w-[91px] h-[97px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="w-6 h-[62px] left-[76.33px] top-[23px] absolute origin-top-left rotate-90 bg-gray-200" />
                <div className="left-[16px] top-[63px] absolute text-gray-100 text-base font-medium leading-normal">
                  B.20.25
                </div>
              </div>
              <div className="w-[92px] h-[97px] relative">
                <div className="w-[92px] h-[97px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="left-[24.67px] top-[63px] absolute text-gray-100 text-base font-medium leading-normal">
                  C.15x
                </div>
                <div className="w-[70px] h-11 left-[10.67px] top-[14px] absolute">
                  <div className="w-11 h-[16.50px] left-[16.50px] top-0 absolute origin-top-left rotate-90 bg-gray-700" />
                  <div className="w-[14.67px] h-[22px] left-[42.17px] top-[14.67px] absolute origin-top-left rotate-90 bg-gray-200" />
                  <div className="w-11 h-5 left-[70px] top-0 absolute origin-top-left rotate-90 bg-gray-700" />
                </div>
              </div>
              <div className="w-[91px] h-[97px] relative">
                <div className="w-[91px] h-[97px] left-0 top-0 absolute bg-gray-700 rounded-[14px]" />
                <div className="w-6 h-[62px] left-[77px] top-[29px] absolute origin-top-left rotate-90 bg-gray-200" />
                <div className="left-[30px] top-[63px] absolute text-gray-100 text-base font-medium leading-normal">
                  E.10
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="w-full justify-between items-start gap-[18px] inline-flex">
          <div className="px-[11px] py-[7px] bg-blue-500 rounded shadow justify-center items-center flex">
            <div className="text-white text-xs font-medium leading-none">Checkout</div>
          </div>
          <div className="px-[11px] py-[7px] bg-white rounded shadow border border-gray-300 justify-center items-center flex">
            <div className="text-gray-700 text-xs font-medium leading-none">Back to list</div>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}

export default App
