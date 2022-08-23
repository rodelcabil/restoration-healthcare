import React from "react";
import { AboutContainer, RowContainer } from "./about-elements";
import Doctors from "../../../images/2.jpg";
import { HiCheckCircle } from "react-icons/hi";
import { ScheduleButton } from "../../../ReusableComponents/ScheduleButton-elements";
import ReusableScheduleButton from "../../../ReusableComponents/ScheduleButton";

const About = () => {
  return (
    <AboutContainer>
      <h1>YOU SHOULDN'T HAVE TO BE ON MEDICATION FOR THE REST OF YOUR LIFE</h1>
      <br />
      <h4>
        Not only is it expensive, but it can cause serious long-term side
        effects like obesity, cancer and cardiovascular disease.
      </h4>

      <RowContainer>
        <img src={Doctors} alt="Doctors" />
        <div className="details">
          <h2>CAN YOU RELATE?</h2>
          <br />
          <div className="details-item">
            <div className="icon-container">
              <HiCheckCircle className="check-icon" />
            </div>
            <span>
              YOU FEEL LIKE YOU'RE JUST CHASING YOUR SYMPTOMS WITH MEDICATION
              AFTER MEDICATION.
            </span>
          </div>
          <div className="details-item">
            <div className="icon-container">
              <HiCheckCircle className="check-icon" />
            </div>
            <span>
              YOUR MEDICAL EXPENSES HAVE CONTINUED TO INCREASE, BUT YOUR HEALTH
              HAS STAYED THE SAME OR GOTTEN WORSE.
            </span>
          </div>
          <div className="details-item">
            <div className="icon-container">
              <HiCheckCircle className="check-icon" />
            </div>
            <span>
              YOUR MEDICAL EXPENSES HAVE CONTINUED TO INCREASE, BUT YOUR HEALTH
              HAS STAYED THE SAME OR GOTTEN WORSE.
            </span>
          </div>
          <div className="details-item">
            <div className="icon-container">
              <HiCheckCircle className="check-icon" />
            </div>
            <span>
              YOU DREAD THE THOUGHT OF LEAVING YOUR FAMILY BEHIND - AND IN THE
              MEANTIME, BURDENING THEM WITH YOU DECLINING HEALTH.
            </span>
          </div><br/>
          <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
        </div>
      </RowContainer>
    </AboutContainer>
  );
};

export default About;
