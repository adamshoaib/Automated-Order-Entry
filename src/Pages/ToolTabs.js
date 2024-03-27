import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Tool from "../Components/Organism/Tool";
import InventoryIcon from "@mui/icons-material/Inventory";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TableChartIcon from "@mui/icons-material/TableChart";

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
          <Tab icon={<InventoryIcon />} label="All Requests" />
          <Tab icon={<DoneAllIcon />} label="Processed Requests" />
          <Tab icon={<TableChartIcon />} label="Status" />
        </Tabs>
      </div>
      {value === 0 && <Tool />}
    </>
  );
}
