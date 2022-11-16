import { FC } from "react";

const Topmenu: FC = () => {
  return (
    <div className="absolute inset-x-0 top-0 p-0.5 flex justify-between bg-tran">
      <div className="ml-2 text-gray-200 font-medium">
        Top phoungmixay
      </div>
      <div className="font-medium text-gray-200">Nov 15 10:16</div>
      <div className="flex space-x-3">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-200">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

        <div className="w-20">
          <div className="shadow w-1/2 rounded border-2 border-gray-200 flex my-1 relative">
            <div className="border-r-8 h-2 rounded-r absolute flex border-gray-100 ml-10 mt-0.5 m z-10" />
            <div
              className="cursor-default bg-green-400 text-xs font-bold leading-none flex items-center justify-center m-0.5 py-1 text-center text-white"
              style={{ width: "100%" }}
            >
              {/* <div class="absolute left-0 mx-3 text-gray-700">100%</div> */}
            </div>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Topmenu