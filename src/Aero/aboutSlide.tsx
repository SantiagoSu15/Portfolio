import type React from "react"
import cosos from "../assets/cosos.jpg";

type Props = {
    isOpen: boolean;
    toggleDrawer: () => void;
  };

export const AboutSlide : React.FC<Props> = ({isOpen,toggleDrawer}) =>{
    return(
        <aside
            id="about-drawer"
            className={`fixed top-0 right-0 z-[100] flex h-full w-full flex-col border-l border-white/50 bg-white/40 shadow-[10px_0_30px_rgba(0,0,0,0.1)] backdrop-blur-xl md:max-w-sm md:w-80 ${isOpen ? "open" : ""}`}
        >
            <div className="flex h-full flex-col p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-[#006080]">Santiago Suarez</h2>
                <button className="text-4xl leading-none" onClick={toggleDrawer}>×</button>
            </div>
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4">
                <img alt="Avatar" src={cosos}/>
                </div>
            </div>
            <div className="space-y-6">
                <div className="p-4 rounded-xl bg-white/30 border border-white/50">
                    <p className="text-sm leading-relaxed">
                           Ingeniero de Sistemas.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="text-xs uppercase font-bold opacity-50 px-2">Educacion</div>
                    <div className="space-y-2">
                        <div className="p-2 rounded-lg bg-white/20 flex items-center gap-3">
                            <span className="w-8 h-8 rounded bg-blue-400 flex items-center justify-center text-white text-xs">r/</span>
                            <span>Escuela Colombiana De Ingenieria julio Garavito</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/20 flex items-center gap-3">
                            <span className="w-8 h-8 rounded bg-green-400 flex items-center justify-center text-white text-xs">r/</span>
                            <span>B1-2 Ingles</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </aside>
    )
}