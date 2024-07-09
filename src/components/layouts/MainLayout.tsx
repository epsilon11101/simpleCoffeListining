import React, { FC } from "react";
import bgCafe from "@assets/backgrounds/bg-cafe.jpg";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div
      className="
        min-h-lvh
      bg-charcoal-black static 
     overflow-hidden
    "
    >
      <div
        className="
      w-full
      h-48
      "
      >
        <img
          src={bgCafe}
          alt="bg-cafe"
          className="w-full h-full object-cover"
        />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
