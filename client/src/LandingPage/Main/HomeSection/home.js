import React from "react";
import ReusableScheduleButton from "../../../ReusableComponents/ScheduleButton";
import { ColumnContainer, HomeContainer } from "./home-elements";

const Home = () => {
  return (
    <HomeContainer>
      <ColumnContainer>
        <h1>
            WE <span className="highlight-text">GIVE PEOPLE</span> THEIR LIVES BACK BY REVERSING <span className="highlight-text">TYPE 2 DIABETES</span>
        </h1>
        <br/>
        <h4>
            A 12-week lifestyle-coaching program scientifically proven to restore your health and be medication free.
        </h4>
        <br/><br/>
        <ReusableScheduleButton bgcolor="#fff" color="black"/>
      </ColumnContainer>
    </HomeContainer>
  );
};

export default Home;
