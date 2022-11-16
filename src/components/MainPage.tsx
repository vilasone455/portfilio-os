import React , { FC } from "react";
import FolderIcon from "./FolderIcon";

const MainPage : FC = () => {
    return (
        <div className="absolute bottom-64 px-12 py-6 left-0 w-96 h-16 flex flex-col ">
            <div className="text-6xl font-medium text-gray-200">
                11:32
            </div>
            <div className="mt-2 text-2xl text-gray-300 font-medium">
                Saturday October 2022
            </div>
            <div className="mt-1  text-gray-300 font-medium">
                Hi , my name is top vilasone , i am frontend developer usaully i like to create unique project
            </div>
{/* <div className="flex flex-col space-y-4 px-3 py-12 w-96 " >
            <FolderIcon isFolder svg={""} name="Portfilio" />
            <FolderIcon isFolder svg={""} name="Skill" />
            <FolderIcon isFolder svg={""} name="Document" />
            <FolderIcon isFolder svg={""} name="Experince" />
            <FolderIcon isFolder svg={""} name="Contact" />

        </div> */}
        </div>
    )
}

export default MainPage