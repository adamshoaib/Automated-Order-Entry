import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tool from "../Components/Organism/Tool";
import TableChartIcon from "@mui/icons-material/TableChart";
import StatusTable from "../Components/Organism/StatusTable";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import StorageIcon from "@mui/icons-material/Storage";
import Dashboard from "../Components/Organism/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import About from "./About";

export default function ToolTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="tool-tab-root">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
          className="tool-tab"
        >
          <Tab icon={<InfoIcon />} label="About" />
          <Tab icon={<StorageIcon />} label="All Requests" />
          <Tab icon={<TableChartIcon />} label="Status" />
          <Tab icon={<QueryStatsIcon />} label="Dashboard Stats" />
        </Tabs>
      </div>
      {value === 0 && <About />}
      {value === 1 && <Tool />}
      {value === 2 && <StatusTable />}
      {value === 3 && <Dashboard />}
    </>
  );
}
