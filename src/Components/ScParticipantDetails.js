import React from "react";
import SportCoordinatorDashboard from "./SportCoordinatorDashboard";
import "antd/dist/antd.css";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./ParticipantData";
import "./Style.css";

function ScParticipantDetails() {
  const tableData = {
    columns,
    data,
  };
  return (
    <>
      <SportCoordinatorDashboard />
      <div className="main">
        <DataTableExtensions {...tableData}>
          <DataTable
            columns={columns}
            data={data}
            noHeader
            defaultSortField="id"
            defaultSortAsc={false}
            pagination
            highlightOnHover
          ></DataTable>
        </DataTableExtensions>
      </div>
    </>
  );
}

export default ScParticipantDetails;
