import React from "react";
import Button from "./Button.jsx";


/**
* Generic social button. If you later add an icon image, pass iconSrc.
*/
export default function SocialButton({ label, iconSrc, onClick }) {
return (
<Button variant="outline" fullWidth onClick={onClick} className="gap-2">
{iconSrc ? (
<img src={iconSrc} alt="" className="h-5 w-5" />
) : null}
<span>{label}</span>
</Button>
);
}