import React from "react";
import dayjs from "dayjs";
import { getIconForType, trimContent } from "../../Utils/Helpers";
import Chips from "../Atoms/Chips";

const OrderCard = ({ data, onCardClick }) => {
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
      <div>
        <span>
          <Chips label={data.type} icon={getIconForType(data.type)} />
        </span>
      </div>
    </div>
  );
};

export default function OrderRequests({ allData, detailClicked }) {
  return (
    <div className="order-requests-root">
      {allData?.map((details) => {
        return (
          <OrderCard
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
