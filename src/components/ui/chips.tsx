import { ReactNode } from "react"

type props = {
    children: ReactNode
}
export default function Chips({children}: props) {
    return (
        <div className="w-fit py-[2px] px-4 text-[14px] font-extralight text-accent-1 bg-accent-4 bg-opacity-90 m-1 rounded-full">{children}</div>
    )
}