import type React from "react";
import { ProjectContainer } from "./projectContainer";

export const MidSection: React.FC = () => {
  return (
    <>
      <section className="text-center mb-16" data-purpose="hero-area">
        <h1 className="text-6xl font-bold hero-text text-[#006080] mb-2">Portfolio</h1>
        <p className="text-xl opacity-80 font-medium">
          My personal portfolio
        </p>
      </section>

      <ProjectContainer />
    </>
  );
};
