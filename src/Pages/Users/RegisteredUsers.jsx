import React from "react";
import { useTable } from "../../Components/Models/useTable";

const RegisteredUsers = () => {
  const attributes = [
    { id: "name", label: "User Name" },
    { id: "email", label: "Email" },
    { id: "phone", label: "Phone" },
    { id: "role", label: "Role" },
  ];

  const { tableUI } = useTable({ attributes, tableType: "Registered Users" });

  return <>{tableUI}</>;
};

export default RegisteredUsers;
