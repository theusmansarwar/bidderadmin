import React from "react";
import { useTable } from "../../Components/Models/useTable";

const Artists = () => {
  const attributes = [
   
    { id: "artistName", label: "Artist Name" },
    { id: "isFeatured", label: "Featured" },
    { id: "isActive", label: "Visibility" },
    { id: "createdAt", label: "Created At" },
  ];

 

  const { tableUI } = useTable({  attributes, tableType: "Artists" });

  return <>{tableUI}</>;
};

export default Artists;
