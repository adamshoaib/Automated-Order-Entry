import React, { useState, createRef } from "react";
import OrderRequests from "./OrderRequests";
import OrderDetails from "./OrderDetails";
import { useScreenshot, createFileName } from "use-react-screenshot";
import { dataArray } from "../../Utils/Constants";
import { sensMSGToOpenAI } from "../../Services";
import ModalBox from "../Modecules/Modal";
import Loader from "../Atoms/Loader";
import { isValidJSON } from "../../Utils/Helpers";

export default function Tool() {
  const [selectedInfo, setSlectedInfo] = useState({});
  const ref = createRef(null);
  const [screenImage, takeScreenShot] = useScreenshot({
    type: "image/jpeg",
    quality: 1.0,
  });
  const [generateOutput, setGenerateOutput] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (image, { name = "img", extension = "jpg" } = {}) => {
    setIsLoading(true);
    if (image) {
      sensMSGToOpenAI({
        prompt:
          "From this image, which contains infomation related to shipping details, extract customerName (this can be customer or company or any entity sending the parcel), id, pickUpAddress, pickupDate, pickupTime, deliveryAddress, deliveryDate, deliveryTime, purchaseOrderNumber, return all this information in json string format and if you dont find any information return null for it, dont give anything other information, just the json",
        image: image,
        model: "gpt-4-vision-preview",
        tokens: 500,
      }).then((res) => {
        const response = res?.choices[0]?.message?.content;
        const formatJson = response?.replace(/```json\n?|```/g, "");
        const parsedData = formatJson
          ? isValidJSON(formatJson)
            ? JSON.parse(formatJson)
            : {}
          : {};
        setGenerateOutput(parsedData);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  };

  const downloadScreenshot = () =>
    takeScreenShot(ref.current).then(handleSubmit);

  const extractInfo = () => {
    downloadScreenshot();
  };

  const displayInfoInModal = () => {
    setModalOpen(true);
  };

  const fieldChanged = (element, data) => {
    setGenerateOutput((prevState) => {
      const updatedOutput = { ...prevState };
      updatedOutput[element] = data;
      return updatedOutput;
    });
  };

  const processData = (data) => {};

  return (
    <>
      <div className="tool-root">
        <div class="tool-info-container">
          <div className="tool-info">
            <OrderRequests
              allData={dataArray}
              detailClicked={(data) => setSlectedInfo(data)}
            />
          </div>
        </div>
        <div className="tool-details">
          <div className="tool-details-root">
            <OrderDetails
              imageRef={ref}
              data={selectedInfo}
              extractInfo={extractInfo}
              isDataExtracted={generateOutput !== null}
              displayInfoInModal={() => displayInfoInModal()}
            />
          </div>
        </div>
      </div>
      {isLoading && <Loader />}
      <ModalBox
        open={modalOpen}
        data={generateOutput}
        title={"Extracted Data"}
        handleClose={() => setModalOpen(false)}
        bodyComponent=""
        fieldChanged={fieldChanged}
        processData={(data) => processData(data)}
      />
    </>
  );
}
