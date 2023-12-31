import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }
            //did user click inisde the dropdown? if outside , close drop down
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }

        };
        document.addEventListener('click', handler, true);
        // watch for target phase , bubbling phase  AND capture phase
        //when capture is true , we are able to capture the event in the capture phase (body --->div)
        //before we can think about closing the drop down (before react click event handler run and close)
        return () => {//cleanup function
            document.removeEventListener('click', handler);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
        ;
    const handleOptionClick = (option) => {
        // close dropdown
        setIsOpen(false);
        // what option did the user click on? 
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel
                className="flex justify-between item-center cursor-pointer"
                onClick={handleClick}>
                {value?.label || 'Select...'}
                <GoChevronDown className="text-lg" />
            </Panel>

            {isOpen &&
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            }
        </div>
    );
}

export default Dropdown;