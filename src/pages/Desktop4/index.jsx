import React from "react";
import LeftPanel from "./left.jsx";
import RightPanel from "./right.jsx";
import bg from "../../assets/bg.jpg";

/**
 * Desktop4 page (Login) composed of Left + Right panels.
 * - Uses bg.jpg as the full-page background.
 * - Left and Right panels now stretch to full screen.
 */
export default function Desktop4() {
  return (
    <div
      className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex items-stretch"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full flex flex-col md:flex-row">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  );
}
