import React, { useState } from "react";
import TextBox from "../Atoms/TextBox";
import { Tooltip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const messgePool = [
  {
    message: "Sure I will definitely provide help with this",
    sender: "bot",
  },
  {
    message:
      "I quite dont understand your concern, could you tell more about your issue ?",
    sender: "bot",
  },
  {
    message: "Tell more about the problem",
    sender: "bot",
  },
  {
    message: "Please wait while I transfer you to a human.",
    sender: "bot",
  },
];

export default function LiveSupportModal({ handleClose }) {
  const [conversation, setConversation] = useState([
    {
      message: "Hello Customer, How may I assist you ?",
      sender: "bot",
    },
  ]);
  const [question, setQuestion] = useState("");

  const addMessageToConversation = (data) => {
    if (data && data !== "") {
      let updatedCustomerMessage = [];
      if (conversation.length > 0) {
        setConversation((prevConversation) => [
          ...prevConversation,
          { message: data, sender: "customer" },
        ]);
      } else {
        updatedCustomerMessage = [{ message: data, sender: "customer" }];
        setConversation(updatedCustomerMessage);
      }

      setTimeout(() => {
        addBotMessage();
      }, 1000);
    }
  };

  const addBotMessageToConversation = (data) => {
    if (data && data !== "") {
      let updatedCustomerMessage = [];
      if (conversation.length > 0) {
        setConversation((prevConversation) => [
          ...prevConversation,
          { message: data, sender: "bot" },
        ]);
      } else {
        updatedCustomerMessage = [{ message: data, sender: "bot" }];
        setConversation(updatedCustomerMessage);
      }
    }
  };

  const addBotMessage = () => {
    const randomIndex = Math.floor(Math.random() * messgePool.length);
    addBotMessageToConversation(messgePool[randomIndex]?.message, true);
  };

  return (
    <>
      <div className="help-root-dialog">
        <div className="help-root-dialog">
          <div className="help-root-dialog-root">
            <div>
              <p className="help-root-dialo-header">
                Welcome to our live support{" "}
              </p>
              <p className="help-root-dialo-header">Powered by AI Bot </p>
            </div>
            <div>
              <Tooltip title={"Close"} placement="bottom">
                <CloseIcon
                  className="icon-curser-pointer"
                  onClick={() => {
                    handleClose();
                  }}
                />
              </Tooltip>
            </div>
          </div>
          <div className="help-root-dialog-conversation">
            {conversation?.map((ele, index) => (
              <div
                className={` ${
                  ele.sender === "bot"
                    ? "help-root-dialog-message-container-bot"
                    : "help-root-dialog-message-container-customer"
                }`}
                key={(ele, index)}
              >
                <div
                  className={` ${
                    ele.sender === "bot"
                      ? "help-root-dialog-message-sub-container-bot"
                      : "help-root-dialog-message-sub-container-customer"
                  }`}
                >
                  <span
                    className={` ${
                      ele.sender === "bot"
                        ? "help-root-dialog-message-bot"
                        : "help-root-dialog-message-customer"
                    }`}
                  >
                    {ele.message}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="help-root-dialo-textbox">
            <TextBox
              className="help-text-box"
              placeholder="Ask your question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <SendIcon
              className="icon-curser-pointer"
              onClick={() => {
                addMessageToConversation(question);
                setQuestion("");
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
