import React from "react";
import ReusableScheduleButton from "../../../ReusableComponents/ScheduleButton";
import { ApproachContainer, ColumnContainer } from "./Approach-elements";

const Approach = () => {
  return (
    <ApproachContainer>
      <ColumnContainer>
        <h1>
            STOP WASTING TIME AND MONEY ON TREATMENTS THAT DON'T WORK.
        </h1>
        <br/>
        <h4>
           People with diabetes have a shorter life expectancy of 10 years. Lifestyle medicine has been clinically proven to improve this, however the majority of information out there focuses only on insulin as the primary treatment. Even though there are more effective alternatives. You have nothing to lose and everything to gain by trying someting different. Learn how to beat this disease for good - and get back to a life you love.
        </h4>
        <br/><br/>
        <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
      </ColumnContainer>
    </ApproachContainer>
  );
};

export default Approach;
