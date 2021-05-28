import React, { useState } from "react";
import styled from "styled-components";
import TabBtn from "../components/TabBtn";
import ProgressBar from "../components/ProgressBar";
import FeaturesProfile from "./components/FeaturesProfile";
import EditProfile from "./components/EditProfile";

const Profile: React.FC<Props> = () => {
  const [editBtn, setEditBtn] = useState(false);
  const toggleEditBtn = (value: boolean) => {
    setEditBtn(value);
  };

  const onSubmit = (value: Values) => {
    console.log("value", value);
  };

  return (
    <Container>
      {editBtn ? (
        <LeftPanel>
          <EditProfile></EditProfile>
        </LeftPanel>
      ) : (
        <LeftPanel>
          <FeaturesProfile></FeaturesProfile>
        </LeftPanel>
      )}

      <MainContent>
        <SummaryEvents>
          <PitcherSummary>
            <SumTitle>Top Batting Values</SumTitle>
            <SumRecord>
              <ProgressBar title="Exit Velocity" avail="N/A" />
              <ProgressBar title="Carry Distance" avail="N/A" />
              <ProgressBar title="Launch Angle" avail="N/A" />
            </SumRecord>
          </PitcherSummary>
          <RecentEvents>
            <EvTitle>Recent Session Reports</EvTitle>
            <EvData>No data currently linked to this profile</EvData>
          </RecentEvents>
        </SummaryEvents>
        <InfoCard>
          <TabBtnsWrapper>
            <TabBtn text="Batting"></TabBtn>
            <TabBtn text="Session Reports"></TabBtn>
            <TabBtn text="Comparison"></TabBtn>
          </TabBtnsWrapper>
        </InfoCard>
      </MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  background: #788b99;
  overflow: auto;
  width: 100%;
  /* width: calc(100vw - 280px); */
`;
const SummaryEvents = styled.div`
  display: flex;
  flex-direction: column;
`;
const PitcherSummary = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
`;
const SumTitle = styled.div`
  font-size: 18px;
  line-height: 1.25;
  font-weight: 700;
  color: #414f5a;
`;
const SumRecord = styled.div`
  display: flex;
`;
const RecentEvents = styled(PitcherSummary)``;
const EvTitle = styled(SumTitle)``;
const EvData = styled.div`
  display: flex;
  color: #667784;
  font-size: 16px;
`;
const InfoCard = styled.div`
  background: #fff;
  margin: 16px;
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  flex-grow: 1;
`;
const TabBtnsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const LeftPanel = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 100%;
  background: #fff;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  overflow: auto;
  padding: 16px;
  position: relative;
  transition: all 0.1s;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  height: auto;
`;

export default Profile;

type Props = {};
type Values = {};
