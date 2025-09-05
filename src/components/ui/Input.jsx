import React from "react";


export default function Input({
id,
label,
type = "text",
placeholder,
value,
onChange,
required = false,
helperText,
startAdornment, // optional React node on the left
}) {
return (
<div className="space-y-1">
{label && (
<label htmlFor={id} className="text-sm font-medium text-gray-700">
{label}
</label>
)}
<div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 py-2.5 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-200">
{startAdornment && <div className="mr-2 shrink-0">{startAdornment}</div>}
<input
id={id}
type={type}
placeholder={placeholder}
value={value}
onChange={onChange}
required={required}
className="w-full text-sm outline-none bg-transparent"
/>
</div>
{helperText && (
<p className="text-xs text-gray-500">{helperText}</p>
)}
</div>
);
}

