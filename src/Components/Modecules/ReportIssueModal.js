import * as React from "react";
import Typography from "../Atoms/Typography";
import Modal from "@mui/material/Modal";
import { Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextBox from "../Atoms/TextBox";
import { getStatusBackgroundColor } from "../../Utils/Helpers";
import Chips from "../Atoms/Chips";
import DropDown from "../Atoms/DropDown";
import Button from "../Atoms/Button";

export default function ReportIssueModal({ open, details, handleClose }) {
  const { driverDetails, trackingDetails } = details;
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <div className="modal-containter-root">
            <div>
              <Typography variant="h3">Report Issue </Typography>
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
                  Driver Name : {driverDetails?.name || "missing"}
                </p>
              </div>
              <div>
                <p className="modal-traking-text">
                  Tracking Number : {details?.trackingNumber || "missing"}
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
            <div className="model-action-body">
              <div className="model-action-body-dropdown">
                <DropDown
                  label="Action to be taken"
                  options={[
                    { key: "0", value: "None" },
                    { key: "1", value: "Package missing" },
                    { key: "2", value: "Driver not reachable" },
                    { key: "3", value: "Package damaged" },
                  ]}
                  value={0}
                  handleChange={() => {}}
                />
              </div>
              <div className="remark-modal-remark">
                <TextBox label="Add Issue details" />
              </div>
            </div>
          </div>
          <div className="remark-modal-submit-button">
            <Button label="Submit" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
