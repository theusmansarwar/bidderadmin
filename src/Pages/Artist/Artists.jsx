import React from "react";
import { useTable } from "../../Components/Models/useTable";

const Artists = () => {
  const attributes = [
   
    { id: "title", label: "Products Title" },
    { id: "soldOut", label: "Available" },
    { id: "isActive", label: "Visibility" },
    { id: "createdAt", label: "Created At" },
  ];

 

  const { tableUI } = useTable({  attributes, tableType: "Products" });

  return <>{tableUI}</>;
};

export default Artists;
