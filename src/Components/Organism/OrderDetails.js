import React, { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import dayjs from "dayjs";
import Audio from "../Atoms/Audio";

export default function OrderDetails({
  imageRef,
  data,
  extractInfo,
  isDataExtracted,
  displayInfoInModal,
}) {
  return (
    <>
      {data?.name ? (
        <div className="order-details-root">
          <div className="order-details-header-info">
            <div className="order-details-info">
              <div className="order-details-info-name">{data.name}</div>
              <div>{`<${data.email}>`}</div>
            </div>
            <div>{dayjs(data.date).format("MMMM D YYYY")}</div>
          </div>
          <div ref={imageRef} className="order-details-body-info">
            <p dangerouslySetInnerHTML={{ __html: data.description }} />
            {data?.attachment?.length > 0 &&
              data?.attachment[0].type === "image" && (
                <div className="order-details-body-info-image-container">
                  <img src={data?.attachment[0].src} width={600} height={700} />
                </div>
              )}
            {data?.attachment?.length > 0 &&
              data?.attachment[0].type === "audio" && <Audio />}
          </div>
          <div className="order-details--button-container">
            <div className="extract-data-button">
              <Button
                label={"Extract Data"}
                onClick={() => {
                  extractInfo();
                }}
              />
            </div>
            {isDataExtracted && (
              <div>
                <Button label={"See Info"} onClick={displayInfoInModal} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Select a request from the left</p>
      )}
    </>
  );
}
