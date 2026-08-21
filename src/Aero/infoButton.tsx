import type React from "react";


type props ={
    toggleDrawer: ()=>void
}

export const InfoButton : React.FC<props> = ({toggleDrawer}) =>{
    return(
        <div className="fixed top-8 right-8 z-50">
            <button className="glossy-pill bg-[#3a9bd5] text-white px-6 py-2 flex items-center gap-2 font-semibold" onClick={toggleDrawer}>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    About Me
            </button>
        </div>
    )
}