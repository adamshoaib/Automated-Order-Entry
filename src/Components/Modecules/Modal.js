import * as React from "react";
import Typography from "../Atoms/Typography";
import Modal from "@mui/material/Modal";
import { Box, Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextBox from "../Atoms/TextBox";
import CalenderPicker from "../Atoms/CalenderPicker";
import TimeDisplay from "../Atoms/TimeDisplay";
import Button from "../Atoms/Button";
import dayjs from "dayjs";

export default function ModalBox({
  title = "title",
  open,
  handleClose,
  data,
  fieldChanged,
  processData,
}) {
  console.log("data  ", dayjs(data?.pickupDate));
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box className="modal-box">
          <div className="modal-containter-root">
            <div>
              <Typography variant="h3">{title}</Typography>
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
          <div>
            <p>
              Attention Required: There may be errors or inconsistencies in this
              data. Please review and correct.{" "}
            </p>
          </div>
          <div className="modal-body-root">
            <TextBox
              label="Customer"
              value={data?.customerName}
              onChange={(event) =>
                fieldChanged("customerName", event.target.value)
              }
            />
            <TextBox
              label="Id"
              value={data?.id}
              onChange={(event) => fieldChanged("id", event.target.value)}
            />
            <TextBox
              label="Pick Up Location"
              value={data?.pickUpAddress}
              onChange={(event) =>
                fieldChanged("pickUpAddress", event.target.value)
              }
            />
            {data?.deliveryDate && (
              <CalenderPicker
                label="Delivery Date"
                value={dayjs(data?.deliveryDate, "DD/MM/YYYY")}
              />
            )}
            <TimeDisplay label="Delivery Time" />
            <TextBox
              label="Delivery Location"
              value={data?.deliveryAddress}
              onChange={(event) =>
                fieldChanged("deliveryAddress", event.target.value)
              }
            />
            {data?.pickupDate && (
              <CalenderPicker
                label="Pickup Date"
                value={dayjs(data?.pickupDate, "DD/MM/YYYY")}
              />
            )}
            <TimeDisplay label="Pickup Time" />
            <TextBox
              label="Purchase Order Number"
              value={data?.purchaseOrderNumber}
              onChange={(event) =>
                fieldChanged("purchaseOrderNumber", event.target.value)
              }
            />
          </div>
          <div className="modal-bottom-actions">
            <Button
              label={"Process data and send to my TMS"}
              onClick={(data) => processData(data)}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
