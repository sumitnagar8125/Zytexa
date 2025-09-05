import React from "react";
import LeftPanel from "./left.jsx";
import RightPanel from "./right.jsx";
import bg from "../../assets/bg.jpg";


/**
* Desktop4 page (Login) composed of Left + Right panels.
* - Uses bg.jpg as the full-page background.
* - The inner container is a two-column card with rounded corners.
*/
export default function Desktop4() {
return (
<div
  className="min-h-screen w-full bg-center bg-cover bg-no-repeat flex items-center justify-center px-4"
  style={{ backgroundImage: `url(${bg})` }}
>
  <div className="w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row">
    <LeftPanel />
    <RightPanel />
  </div>
</div>
);
}