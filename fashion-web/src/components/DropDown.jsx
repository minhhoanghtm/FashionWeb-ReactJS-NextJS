import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function DropDown( {options, value, onChange}) {
    const [open, setOpen] = useState(false);
    // console.log(label);
    // console.log(options);
    return (
        <>
            <div className="relative w-48">
                {/* Selected  */}
                <div 
                onClick={() => setOpen(!open)}
                className="flex justify-between border px-3 py-2 rounded cursor-pointer bg-white"
                >
                    <span>{value || "Chọn "}</span>
                    <span><IoMdArrowDropdown /></span>
                </div>
                {/* Options  */}
                {open && (
                    <div className="absolute w-full bg-white border rounded mt-1 shadow z-50">
                        {Array.isArray(options) && 
                        options.map((item, index) => (
                            <div 
                            key={index}
                            onClick={() => {
                                onChange(item);
                                setOpen(false);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
} 
export default DropDown;