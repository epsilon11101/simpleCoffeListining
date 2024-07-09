import React, { FC } from "react";
import bgCafe from "assets/backgrounds/bg-cafe.png";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="h-dvh bg-charcoal-black">
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
