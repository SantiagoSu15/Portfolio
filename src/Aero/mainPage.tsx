import type React from "react"
import { useState } from "react";
import { InfoButton } from "./infoButton";
import { AboutSlide } from "./aboutSlide";
import { Footer } from "./Footer";
import { MidSection } from "./midSection";


export const MainPage: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
  
    function toggleDrawer() {
      setIsOpen((prev) => !prev)
    }
  
    return (
      <>
        <div className="aurora-bg" data-purpose="background-aura" />
        <div
          className="bokeh-orb w-[400px] h-[400px] top-[-100px] left-[-100px]"
          data-purpose="bokeh"
        />
        <div
          className="bokeh-orb w-[300px] h-[300px] bottom-[-50px] right-[-50px]"
          data-purpose="bokeh"
        />

        <div className="relative z-0 flex min-h-screen flex-col">
          <div className="flex flex-1 flex-col p-6 md:p-12">
            <InfoButton toggleDrawer={toggleDrawer} />
            <div className="max-w-5xl mx-auto w-full flex-1 pt-20">
              <MidSection />
            </div>
            <AboutSlide isOpen={isOpen} toggleDrawer={toggleDrawer} />
          </div>
          <Footer />
        </div>
      </>
    )
  }