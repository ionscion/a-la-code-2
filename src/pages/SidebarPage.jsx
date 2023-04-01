import Sidebar from "../components/Sidebar";
import { useState } from "react";

function SidebarPage() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "All Contacts", value: "All contacts" },
    { label: "New Contact", value: "New Contact" },
    { label: "Subscribers", value: "Subscribers" },
  ];

  return (
    <div>
      <Sidebar value={selection} onChange={handleSelect} options={options} />
    </div>
  );
}

export default SidebarPage;
