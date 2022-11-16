import React , { FC } from "react";
import Draggable from "react-draggable";

const FrameApp : FC<{name : string , children : any , onClose : () => void}> = ({onClose , name , children}) => {
    return (
        <Draggable>

        <div className="border rounded shadow absolute bg-white z-50 top-[30%] left-[40%] w-[400px]">
        <div className="p-1 border-b flex justify-between">
          <div />
          <div className="font-medium text-gray-500">{name}</div>
          <div className="flex space-x-2 mt-1 mr-2">
            <div className="rounded-full w-4 h-4 bg-yellow-400" />
            <div className="rounded-full w-4 h-4 bg-green-400" />
            <div className="rounded-full w-4 h-4 bg-red-400" onClick={onClose} />
          </div>
        </div>
        <div className="h-64" >
            <iframe className="w-full h-full " src="https://api.whatsapp.com/send/?phone=%2B8562076781165&text&type=phone_number&app_absent=0" />
        </div>
      </div>
      </Draggable>
      
    )
}

export default FrameApp