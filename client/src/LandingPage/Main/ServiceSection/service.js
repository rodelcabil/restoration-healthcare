import React from "react";
import ReusableScheduleButton from "../../../ReusableComponents/ScheduleButton";
import ServiceCard from "../../../ReusableComponents/ServiceCard/ServiceCard";
import { RowContainer, ServiceContainer } from "./service-elements";
import SaveMoneyLogo from '../../../images/service/1.PNG';
import EndinsulinDependenceLogo from '../../../images/service/2.PNG';
import FeelTheDifferenceLogo from '../../../images/service/3.PNG';


const Service = () => {
  return (
    <ServiceContainer>
      <h1>OUR SERVICE</h1>
      <br />
      <h4>
       You deserve a plan that will get you back to optimal<br/> Health with the support of professionals who care.
      </h4>
      <RowContainer>
        <ServiceCard imgPath={SaveMoneyLogo} name="Save Money" details="Say goodbye to expensive treatments and doctor visits with lifestyle changes that actually work." />
        <ServiceCard imgPath={EndinsulinDependenceLogo} name="End Insulin Dependence" details="We'll teach you how to control your blood glucose levels and restore your health - naturally." />
        <ServiceCard imgPath={FeelTheDifferenceLogo} name="Feel the Difference" details="Most people see improvements in energy, mood, and symptoms within the first month." />
      </RowContainer>
      <br/><br/>
      <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
      <br/><br/><br/><br/>
      <h1>EXTRA ORDINARY RESULTS IN OUR<br/> HIGHEST RISK PATIENTS</h1>
    </ServiceContainer>
  );
};

export default Service;
