import { MouseEventHandler } from  "react"
export interface CustomButtonProps{
    title:string,
    containerStyles?: string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType ?:"button" | "submit"

}
export interface ManuFactureProps{
    manuFacture:string,
    setManuFacture:(manuFacture:string)=> void

}