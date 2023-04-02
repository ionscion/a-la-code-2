import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";

function Sidebar({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    //called when Dropdown component is removed from document
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    // setIsOpen((currentIsOpen) => !currentIsOpen);
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    //close dropdown
    setIsOpen(false);
    //what option clicked?
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl}>
      <div onClick={handleClick}>
        {value?.label || "Contacts"}
        <GoChevronDown />
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Sidebar;
