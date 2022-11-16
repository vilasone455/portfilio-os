import { FC } from "react";
import { BottomMenus } from "../data/bottomMenu";
import MenuIcon from "./MenuIcon";

const BottomMenu: FC = () => {

    const onClickMenu = (e: string) => {
        if (e === "fullscreen") {
            document.documentElement.requestFullscreen();
        }
    }

    return (
        <div className="absolute px-3 py-1 left-[35%] bottom-2 rounded-lg bg-tran2 flex space-x-3">
            {BottomMenus.map(b => {
                return <MenuIcon onClick={() => onClickMenu(b.name)} {...b} />
            })}
        </div>
    )
}

export default BottomMenu