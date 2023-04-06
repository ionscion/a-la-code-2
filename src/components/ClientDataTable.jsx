import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "Id", width: 200 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "middleName", headerName: "Middle name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "phoneNumber", headerName: "Phone#", width: 150 },
  {
    field: "isActive",
    headerName: "Active/Inactive",
    width: 150,
    valueGetter: (params) => (params.row.isActive ? "Active" : "Inactive"),
  },
  { field: "user_id", headerName: "Lawyer Id", width: 200 },
];

export default function DataTable({ apiInfo }) {
  let rows = [];
  if (apiInfo) {
    const rowsArray = Array.isArray(apiInfo) ? apiInfo : [apiInfo];
    rows = rowsArray.map((user) => {
      //  let formattedPhone = user.phone_number;
      // formattedPhone.toString().replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      return {
        id: user.id,
        lastName: user.last_name,
        middleName: user.middle_name,
        firstName: user.first_name,
        email: user.email,
        phoneNumber: user.phone_number,
        isActive: user.is_active,
        user_id: user.user_id,
      };
    });
  }

  return (
    <div style={{ height: 500, width: "100%" }}>
      <Typography variant="h4">Client List</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}