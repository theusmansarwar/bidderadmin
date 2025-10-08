import React from "react";
import { useTable } from "../../Components/Models/useTable";

const Bidders = () => {
  const attributes = [
   
    { id: "product.title", label: "Product Name" },
    { id: "bidder.name", label: "Bidder Name" },
    { id: "bidder.email", label: "Email" },
    { id: "bidder.phone", label: "Phone" },
    { id: "product.minimumBid", label: "Minimum Bid" },
    { id: "bidAmount", label: "User Bid" },
  ];

  
  const { tableUI } = useTable({  attributes, tableType: "Bidders" });

  return <>{tableUI}</>;
};

export default Bidders;
