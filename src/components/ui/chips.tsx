import { ReactNode } from "react"

type props = {
    children: ReactNode
}
export default function Chips({children}: props) {
    return (
        <div style={{boxShadow: `4px 4px #000000`}} className={`w-fit py-[2px] px-4 text-[14px] font-light text-white bg-accent-4 bg-opacity-90 m-1 rounded-full`}>{children}</div>
    )
}