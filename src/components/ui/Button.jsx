import React from "react";


const sizes = {
sm: "h-9 px-4 text-sm",
md: "h-11 px-5 text-sm",
lg: "h-12 px-6 text-base",
};


const variants = {
primary: "bg-violet-600 text-white hover:bg-violet-700 shadow-sm",
outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50",
ghost: "bg-transparent text-gray-700 hover:bg-gray-200",
};


export default function Button({
children,
variant = "primary",
size = "md",
type = "button",
fullWidth = false,
className = "",
...props
}) {
const base =
"inline-flex items-center justify-center rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 disabled:cursor-not-allowed";
const w = fullWidth ? "w-full" : "";
return (
<button
type={type}
className={`${base} ${sizes[size]} ${variants[variant]} ${w} ${className}`}
{...props}
>
{children}
</button>
);
}