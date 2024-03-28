import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Status_data } from "../../Utils/Constants";
import Chips from "../Atoms/Chips";
import { getStatusBackgroundColor } from "../../Utils/Helpers";
import TrackingModal from "../Modecules/TrackingModal";
import DriverDetailsModal from "../Modecules/DriverDetailsModal";
import ReportIssueModal from "../Modecules/ReportIssueModal";

export default function StatusTable() {
  const [currentDetails, setCurrentDetails] = React.useState({});
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isDriverDetailsModalOpen, setIsDriverDetailsModalOpen] =
    React.useState(false);
  const [isIssueModalOpen, setIsIssueModalOpen] = React.useState(false);

  const columns = [
    { field: "id", headerName: "Load", width: 70 },
    {
      field: "driver",
      headerName: "Driver",
      width: 130,
      renderCell: (params) => (
        <p
          className="data-table-driver-info"
          onClick={(e) => {
            e.stopPropagation();
            onRequestDriverDetails(params.row);
          }}
        >
          {params.value}
        </p>
      ),
    },
    { field: "pickUpAddress", headerName: "Pick Up", width: 150 },
    { field: "deliveryAddress", headerName: "Delivery", width: 150 },
    { field: "cost", headerName: "Rate", width: 130 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      renderCell: (params) => (
        <Chips
          label={params.value}
          backgroundColor={getStatusBackgroundColor(params.value)}
        />
      ),
    },
    {
      field: "track",
      headerName: "Tracking",
      width: 130,
      renderCell: (params) => (
        <Chips
          label={params.value}
          onClick={(e) => {
            e.stopPropagation();
            onRequestTracking(params.row);
          }}
        />
      ),
    },
    {
      field: "report",
      headerName: "Report Issues",
      width: 130,
      renderCell: (params) => (
        <Chips
          label={"Report Issue"}
          backgroundColor={"#d1c5c5"}
          onClick={(e) => {
            e.stopPropagation();
            onIssueReport(params.row);
          }}
        />
      ),
    },
  ];

  const onRequestTracking = (row) => {
    setCurrentDetails(row);
    setIsModalOpen(true);
  };

  const onRequestDriverDetails = (row) => {
    setCurrentDetails(row);
    setIsDriverDetailsModalOpen(true);
  };

  const handleClose = () => {
    setCurrentDetails({});
    setIsModalOpen(false);
    setIsDriverDetailsModalOpen(false);
    setIsIssueModalOpen(false);
  };

  const onIssueReport = (row) => {
    setCurrentDetails(row);
    setIsIssueModalOpen(true);
  };

  return (
    <div
      style={{
        height: "min-content",
        width: "66%",
        alignSelf: "center",
        fontSize: "1.2rem",
      }}
    >
      <DataGrid
        rows={Status_data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        style={{
          fontSize: "1rem",
        }}
        className="data-grid-root"
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRequestTracking={onRequestTracking}
        onRequestDriverDetails={onRequestDriverDetails}
        onIssueReport={onIssueReport}
      />
      <TrackingModal
        details={currentDetails}
        open={isModalOpen}
        handleClose={handleClose}
      />
      <DriverDetailsModal
        details={currentDetails}
        open={isDriverDetailsModalOpen}
        handleClose={handleClose}
      />
      <ReportIssueModal
        details={currentDetails}
        open={isIssueModalOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
