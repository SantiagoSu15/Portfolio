import type React from "react";
import { ProjectContainer } from "./projectContainer";

export const MidSection: React.FC = () => {
  return (
    <>
      <section className="text-center mb-16" data-purpose="hero-area">
        <h1 className="text-6xl font-bold hero-text text-[#006080] mb-2">Projects</h1>
        <p className="text-xl opacity-80 font-medium">
          A list of personal and academic projects
        </p>
      </section>

      <ProjectContainer />
    </>
  );
};
