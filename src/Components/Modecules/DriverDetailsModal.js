import * as React from "react";
import Typography from "../Atoms/Typography";
import Modal from "@mui/material/Modal";
import { Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextBox from "../Atoms/TextBox";

export default function DriverDetailsModal({ open, details, handleClose }) {
  const { driverDetails } = details;
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <div className="modal-containter-root">
            <div>
              <Typography variant="h3">Driver Details</Typography>
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
                  Name : {driverDetails?.name || "missing"}
                </p>
              </div>
              <div>
                <p className="modal-traking-text">
                  Age : {driverDetails?.age || "missing"}
                </p>
              </div>
              <div>
                <p className="modal-traking-text">
                  Phone: {driverDetails?.mobile || "missing"}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-tracking-details-info">
            <div>
              <p className="modal-traking-text">
                Address : {driverDetails?.address || "missing"}
              </p>
            </div>
            <div>
              <p className="modal-traking-text">
                Company : {driverDetails?.comapny || "missing"}
              </p>
            </div>
          </div>
          <div className="driver-modal-remark">
            <TextBox label="Add Remarks" />
          </div>

          <div>
            <p className="modal-traking-text">
              Remarks :
              {driverDetails?.remarks?.map((ele, index) => {
                return (
                  <>
                    <p key={index} className="modal-traking-text">
                      {ele}
                    </p>
                  </>
                );
              })}{" "}
            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
