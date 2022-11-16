import { FC } from "react";

interface Prop{
    name : string
    svg : any
    onClick : () => void
}

const MenuIcon : FC<Prop> = ({name , svg , onClick}) => {
    return (
        <div className="" onClick={onClick}>
            <img src={svg} width={32} height={32} style={{imageRendering: "-webkit-optimize-contrast"}} />
        </div>
    )
}

export default MenuIcon