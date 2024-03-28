import React from "react";
import Graph from "../Atoms/Graph";

export default function Dashboard() {
  const deliveryStatusData = [
    { status: "Delivered", count: 150 },
    { status: "Failed", count: 20 },
    { status: "In Transit", count: 80 },
    { status: "Missing", count: 10 },
    { status: "Damaged", count: 5 },
  ];

  const destinations = [
    { status: "USA", count: 150 },
    { status: "Australia", count: 20 },
    { status: "India", count: 80 },
    { status: "Sri Lanka", count: 10 },
    { status: "Pakistan", count: 5 },
  ];

  const miles = [
    { status: "March", count: 1500 },
    { status: "April", count: 2500 },
    { status: "May", count: 3500 },
    { status: "June", count: 1000 },
    { status: "July", count: 5000 },
    { status: "August", count: 6000 },
    { status: "September", count: 8000 },
    { status: "October", count: 1000 },
    { status: "November", count: 500 },
    { status: "December", count: 5000 },
  ];

  const extraction = [
    { status: "Successful", count: 1500 },
    { status: "Failed", count: 2500 },
    { status: "Edited", count: 3500 },
    { status: "Timeouts", count: 1000 },
    { status: "Errors", count: 5000 },
  ];

  return (
    <div className="dashboard-root">
      <div style={{ width: 500 }}>
        <Graph
          title="Delivery Status Summary"
          type="bar"
          data={deliveryStatusData}
        />
      </div>
      <div style={{ width: 400 }}>
        <Graph
          title="Delivery by destination"
          type="doughnut"
          data={destinations}
        />
      </div>
      <div style={{ width: 500 }}>
        <Graph title="Total Miles" type="line" data={miles} />
      </div>
      <div style={{ width: 500 }}>
        <Graph title="Data Extraction Status" type="bar" data={extraction} />
      </div>
    </div>
  );
}
