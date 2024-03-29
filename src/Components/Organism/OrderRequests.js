import React, { useState } from "react";
import dayjs from "dayjs";
import { getIconForType, trimContent } from "../../Utils/Helpers";
import Chips from "../Atoms/Chips";
import { Tooltip } from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";

const OrderCard = ({ data, onCardClick, updateData }) => {
  return (
    <div onClick={onCardClick} className="order-card-root">
      <div className="order-card-info">
        <div>
          <span className="order-card-from">{data.name}</span>
        </div>
        <div>
          <span className="order-card-date">
            {dayjs(data.date).format("DD/MM/YYYY")}
          </span>
        </div>
      </div>
      <div className="order-card-description">
        <span>
          {trimContent(data.outline ? data.outline : data.description, 100)}
        </span>
      </div>
      <div className="order-card-type-actions">
        <div>
          <span>
            <Chips label={data.type} icon={getIconForType(data.type)} />
          </span>
        </div>
        <div>
          <Tooltip title={"Flag this mail"} placement="bottom">
            <FlagIcon
              color={`${data.isFlagged ? "error" : "success"}`}
              onClick={() => {
                data.isFlagged = true;
              }}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default function OrderRequests({ allData, detailClicked }) {
  const [data, setData] = useState(allData);

  return (
    <div className="order-requests-root">
      {data?.map((details, index) => {
        return (
          <OrderCard
            key={index}
            data={details}
            onCardClick={() => {
              detailClicked(details);
            }}
          />
        );
      })}
    </div>
  );
}
