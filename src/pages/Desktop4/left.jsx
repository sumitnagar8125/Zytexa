import React from "react";
import Button from "../../components/ui/Button.jsx";
import logo from "../../assets/zytexa.png";
import bg from "../../assets/bg.jpg";


export default function LeftPanel() {
return (
<div
  className="hidden md:flex w-full md:w-1/2 flex-col items-center justify-center px-8 py-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>
<div className="flex flex-col items-center">
<img src={logo} alt="Zytexa" className="w-20 h-20 object-contain" />
<h1 className="mt-4 text-2xl font-bold text-violet-800 tracking-wide">ZYTEXA</h1>
<p className="text-sm text-gray-500">Technology</p>


<div className="mt-8 w-44 space-y-4">
<Button fullWidth>Admin</Button>
<Button fullWidth>Employee</Button>
</div>
</div>
</div>
);
}