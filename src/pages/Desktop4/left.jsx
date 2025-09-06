import React from "react";
import Button from "../../components/ui/Button";
import logo from "../../assets/zytexa.png";
import bg from "../../assets/bg.jpg";

/**
 * LeftPanel — use this as a replacement for your current left.jsx
 * - Uses valid Tailwind classes only
 * - Removes mt-60 and invalid widths
 */
export default function LeftPanel() {
  return (
    <div
      className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center px-8 py-12 bg-cover bg-center "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center space-y-64">
  <div>
    <img
      src={logo}
      alt="Zytexa"
      className="w-48 h-48 object-contain"
    />
  </div>

  <div className="w-56 space-y-6">
    <Button fullWidth>Admin</Button>
    <Button fullWidth>Employee</Button>
  </div>
</div>


    </div>
  );
}
