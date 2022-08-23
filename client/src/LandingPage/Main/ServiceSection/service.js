import React from "react";
import ReusableScheduleButton from "../../../ReusableComponents/ScheduleButton";
import ServiceCard from "../../../ReusableComponents/ServiceCard/ServiceCard";
import { RowContainer, ServiceContainer, StatisticsContainer, RiskRowContainer } from "./service-elements";
import SaveMoneyLogo from '../../../images/service/1.PNG';
import EndinsulinDependenceLogo from '../../../images/service/2.PNG';
import FeelTheDifferenceLogo from '../../../images/service/3.PNG';
import StatisticsCard from "../../../ReusableComponents/StatisticsCard/StatisticsCard";
import TrigylyceridesIMG from '../../../images/service/4.PNG'
import FastingPlasmaGlucoseIMG from '../../../images/service/5.PNG'
import TotalCholestroalIMG from '../../../images/service/6.PNG'
import LDLCholestroalIMG from '../../../images/service/7.PNG'
import SyndromineSyndromeIMG from '../../../images/service/8.PNG'
import BodyMassIndexIMG from '../../../images/service/9.PNG'


const Service = () => {
  return (
    <>
      <ServiceContainer>
        <h1>OUR SERVICE</h1>
        <br />
        <h4>
          You deserve a plan that will get you back to optimal Health with the support of professionals who care.
        </h4>
        <RowContainer small>
          <ServiceCard imgPath={SaveMoneyLogo} name="Save Money" details="Say goodbye to expensive treatments and doctor visits with lifestyle changes that actually work." />
          <ServiceCard imgPath={EndinsulinDependenceLogo} name="End Insulin Dependence" details="We'll teach you how to control your blood glucose levels and restore your health - naturally." />
          <ServiceCard imgPath={FeelTheDifferenceLogo} name="Feel the Difference" details="Most people see improvements in energy, mood, and symptoms within the first month." />
        </RowContainer>
        <br />
        <ReusableScheduleButton bgcolor="#6DB943" color="#fff" />
        <br /><br /><br />
        <h1>EXTRA ORDINARY RESULTS IN OUR HIGHEST RISK PATIENTS</h1>
      </ServiceContainer>
      <StatisticsContainer >
        <RiskRowContainer>
          <StatisticsCard imgPath={TrigylyceridesIMG} name="TRIGLYCERIDES" statistics="44.1% decline" details="Initial level: Above 500mg/dl" />
          <StatisticsCard imgPath={FastingPlasmaGlucoseIMG} name="Fasting Plasma Glucose" statistics="19.9% decline" details="Initial level: Above 500mg/dl" />
          <StatisticsCard imgPath={TotalCholestroalIMG} name="Total Cholestroal" statistics="19.8% decline" details="Initial level: Above 500mg/dl" />
          <StatisticsCard imgPath={LDLCholestroalIMG} name="LDL Cholestroal" statistics="16.1% decline" details="Initial level: Above 500mg/dl" />
          <StatisticsCard imgPath={SyndromineSyndromeIMG} name="Syndromine Syndrome" statistics="45.1% decline" details="Initial level: Above 500mg/dl" />
          <StatisticsCard imgPath={BodyMassIndexIMG} name="Body Mass Index" statistics="50.1% decline" details="Initial level: Above 500mg/dl" />
        </RiskRowContainer>
      </StatisticsContainer>
    </>
  );
};

export default Service;
