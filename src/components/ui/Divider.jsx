import React from "react";


export default function Divider({ label = "Or" }) {
return (
<div className="flex items-center my-6">
<div className="flex-1 h-px bg-gray-200" />
<span className="px-3 text-sm text-gray-400">{label}</span>
<div className="flex-1 h-px bg-gray-200" />
</div>
);
}

