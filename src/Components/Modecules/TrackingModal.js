import * as React from "react";
import Typography from "../Atoms/Typography";
import Modal from "@mui/material/Modal";
import { Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import dayjs from "dayjs";
import Chips from "../Atoms/Chips";
import { getStatusBackgroundColor } from "../../Utils/Helpers";
import TrackingTimeline from "../Atoms/TrackingTimeline";
import DropDown from "../Atoms/DropDown";
import Button from "../Atoms/Button";

export default function TrackingModal({ open, details, handleClose }) {
  const { trackingDetails } = details;
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <div className="modal-containter-root">
            <div>
              <Typography variant="h3">Traking Details</Typography>
            </div>
            <div className="modal-header-icon">
              <div>
                <Tooltip title={"Close"} placement="bottom">
                  <CloseIcon
                    className="icon-curser-pointer"
                    onClick={handleClose}
                  />
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="modal-body-root">
            <div className="modal-tracking-details-info">
              <div>
                <p className="modal-traking-text">
                  Tracking Number :{" "}
                  {trackingDetails?.trackingNumber || "Missing"}
                </p>
              </div>
              <div>
                <p className="modal-traking-text">
                  Est. Delivery Date :{" "}
                  {dayjs(trackingDetails?.deliveryDate).format("MM/DD/YYYY")}
                </p>
              </div>
              {trackingDetails?.status && (
                <div>
                  <Chips
                    label={trackingDetails?.status}
                    backgroundColor={getStatusBackgroundColor(
                      trackingDetails?.status
                    )}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="modal-action-needed-root">
            {trackingDetails?.status === "Need Action" && (
              <div className="model-action-body">
                <div className="model-action-body-dropdown">
                  <DropDown
                    label="Action to be taken"
                    options={[
                      { key: "0", value: "None" },
                      { key: "1", value: "Reattempt Deliver" },
                      { key: "2", value: "Reattempt after 3 days" },
                      { key: "3", value: "Cancel the delivery" },
                      { key: "4", value: "Contact Customer" },
                    ]}
                    value={0}
                    handleChange={() => {}}
                  />
                </div>
                <div>
                  <Button label="Process Action" />
                </div>
              </div>
            )}
          </div>
          <div>
            <TrackingTimeline
              status={trackingDetails?.status}
              details={trackingDetails?.progress}
            />
          </div>
          <div>
            <p className="modal-traking-text">
              Comments :{" "}
              {trackingDetails?.comments?.map((ele, index) => {
                return (
                  <>
                    <p key={index} className="modal-traking-text">
                      {ele}
                    </p>
                  </>
                );
              }) || "No Comments to display"}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
