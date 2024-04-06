import React from "react";
import Image1 from "../Assets/Image/Image-1.png";
import Image2 from "../Assets/Image/Image-2.png";
import Image3 from "../Assets/Image/Image-3.png";
import Image4 from "../Assets/Image/Image-4.png";
import Image5 from "../Assets/Image/Image-5.png";
import Image6 from "../Assets/Image/Image-6.png";
import Image7 from "../Assets/Image/Image-7.png";

export default function About() {
  return (
    <div className="about-root">
      <div className="about-center-header-align">
        <p className="about-header" style={{ textAlign: "center" }}>
          Supercharge your logistics. Automate order processing, track shipments
          in real-time, and gain data-driven insights with our logistics
          dashboard. It's everything you need to automate your workflow.
        </p>
        <p className="about-sub-header" style={{ textAlign: "center" }}>
          Automated Order Analysis is a system that uses OpenAI Api to process
          orders received through various channels like emails, audio
          recordings, and SMS messages. It extracts key information from these
          orders and prefills a form, saving users time and effort. Users can
          then review and edit the prefilled information before submitting it to
          the TMS (Transportation Management System).
        </p>
        <p
          className="about-sub-header"
          style={{ marginTop: 10, textAlign: "center" }}
        >
          This system offers a user-friendly interface for real-time shipment
          management (features currently static for demonstration purposes).
          Users can track their courier's location, report transportation
          issues, and access driver details. A built-in dashboard provides
          valuable analytics to help users gain insights into their order
          fulfillment process. The application also has a live chat Bot which
          helps in resolving the queries related to the orders.
        </p>
      </div>
      <div className="about-center-img-align">
        <img src={Image1} className="about-image-one" />
        <p className="image-title">
          Forward mails to our portal and access and process your mail with just
          a single click.
        </p>
      </div>
      <div className="about-center-img-align">
        <img src={Image2} className="about-image-one" />
        <p className="image-title">
          Real-time order tracking, with driver information, live tracking and
          issur reporting.
        </p>
      </div>

      <div className="about-center-img-align-row">
        <div>
          <img src={Image3} className="about-image-one-small" />
          <p className="image-title-small">Track your order in real-time.</p>
        </div>
        <div>
          <img src={Image4} className="about-image-one-small" />
          <p className="image-title-small">
            Get the driver's details to rectify delivery related queries.
          </p>
        </div>
      </div>
      <div className="about-center-img-align-row">
        <div>
          <img src={Image5} className="about-image-one-small" />
          <p className="image-title-small">
            Shipment problem? Report it seamlessly with just one click.
          </p>
        </div>
        <div>
          <img src={Image6} className="about-image-one-small" />
          <p className="image-title-small">
            Talk to our live support team available 24/7.
          </p>
        </div>
      </div>
      <div className="about-center-img-align">
        <img src={Image7} className="about-image-one" />
        <p className="image-title-large">
          Visualise the power of your logistics data. Our interactive dashboard
          empowers you to visualize key metrics, identify growth opportunities,
          and optimize your operations.
        </p>
      </div>
      <div className="about-footer-container">
        <p className="about-footer-text">
          Have suggestions? We value your feedback! Contact us at
          k.adamshoaib@gmail.com.
        </p>
      </div>
    </div>
  );
}
