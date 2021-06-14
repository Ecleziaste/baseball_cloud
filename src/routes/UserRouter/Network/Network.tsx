import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../../../layouts";
import PageHeader from "../components/PageHeader";
import NetworkCard from "../components/NetworkCard";
import Selector from "../../../components/Selector";
import SelectorInput from "../../../components/SelectorInput";
import SearchInput from "../components/SearchInput";
import { Form, Field } from "react-final-form";
import Pagination from "../components/Pagination";

enum Titles {
  school = "School",
  team = "Team",
  position = "Position",
  age = "Age",
  favorite = "All",
  profiles_count = "Show: 10",
}

const OPTIONS = {
  position: [
    { text: "All" },
    { text: "Catcher", payloadText: "catcher" },
    { text: "First Base", payloadText: "first_base" },
    { text: "Second Base", payloadText: "second_base" },
    { text: "Shortstop", payloadText: "shortstop" },
    { text: "Third Base", payloadText: "third_base" },
    { text: "Outfield", payloadText: "outfield" },
    { text: "Pitcher", payloadText: "pitcher" },
  ],
  favorite: [{ text: "All" }, { text: "Favorite", payloadText: 1 }],
  profiles_count: [
    { text: "10", payloadText: 10 },
    { text: "15", payloadText: 15 },
    { text: "25", payloadText: 25 },
  ],
};

const Network: React.FC<Props> = () => {
  const [selects, setSelects] = useState<Selects>({
    player_name: "",
    school: "",
    team: "",
    position: "",
    age: 1,
    favorite: 1,
    profiles_count: 10,
    offset: 0,
  });

  useEffect(() => {}, [selects]);

  // const selectOption = ({type, text}) => {
  //   const newSelectedData = {...selects, type: text}

  // setSelects(newSelctedData)
  // }
  const onSubmit = () => {};

  return (
    <AppLayout>
      <Main>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <div>
              <HeaderRow>
                <PageHeader title="Network" />
                <Selectables>
                  <Field
                    name="school"
                    component={SelectorInput}
                    title={Titles.school}
                  />

                  <Field name="team" component={SelectorInput} title="Team" />

                  <Field
                    name="position"
                    component={Selector}
                    title={Titles.position}
                    options={OPTIONS.position}
                    defaultTitle={Titles.position}
                  />

                  <Field
                    name="age"
                    component={SelectorInput}
                    title={Titles.age}
                  />

                  <Field
                    name="favorite"
                    component={Selector}
                    title={Titles.favorite}
                    options={OPTIONS.favorite}
                    defaultTitle={Titles.favorite}
                  />

                  <Field
                    name="profiles_count"
                    component={Selector}
                    title={Titles.profiles_count}
                    options={OPTIONS.profiles_count}
                    defaultTitle={Titles.profiles_count}
                  />
                </Selectables>
              </HeaderRow>

              <Container>
                <Players>Available Players {"(...)"}</Players>
                <SearchPlayer>
                  <Field
                    name="player_name"
                    component={SearchInput}
                    placeholder="Player Name"
                  ></Field>
                </SearchPlayer>
              </Container>
            </div>
          )}
        />

        <PageBody>
          <TableHeaders>
            <TABLE_TITLE_1>Player Name</TABLE_TITLE_1>
            <TABLE_TITLE_2>Sessions</TABLE_TITLE_2>
            <TABLE_TITLE_3>School</TABLE_TITLE_3>
            <TABLE_TITLE_4>Teams</TABLE_TITLE_4>
            <TABLE_TITLE_5>Age</TABLE_TITLE_5>
            <TABLE_TITLE_6>Favorite</TABLE_TITLE_6>
          </TableHeaders>
          <TableBody>
            <NetworkCard />
            <NetworkCard />
            <NetworkCard />
          </TableBody>
        </PageBody>

        <Pagination />
      </Main>
    </AppLayout>
  );
};

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled(HeaderRow)`
  padding: 16px;
`;
const Players = styled.div`
  display: flex;
  line-height: 1.25;
  font-size: 18px;
  color: #414f5a;
  font-weight: 400;
`;
const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-top: 23px;
`;
const TableHeaders = styled.div`
  display: flex;
  width: 100%;
  min-height: 44px;
  margin-bottom: 6px;
  background-color: #fff;
  align-items: center;
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;

const Selectables = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;
const SearchPlayer = styled.div`
  /* padding-right: 23px;
  margin-right: 23px; */
`;
const TableBody = styled.div`
  display: flex;
  flex-direction: column;
`;
const TABLE_TITLE = styled.div`
  display: flex;
  max-width: 100%;
  justify-content: flex-start;
  text-overflow: ellipsis;
`;
const TABLE_TITLE_1 = styled(TABLE_TITLE)`
  width: 19.5%; ;
`;
const TABLE_TITLE_2 = styled(TABLE_TITLE)`
  width: 10%;
`;
const TABLE_TITLE_3 = styled(TABLE_TITLE)`
  width: 23%;
`;
const TABLE_TITLE_4 = styled(TABLE_TITLE)`
  width: 23%;
`;
const TABLE_TITLE_5 = styled(TABLE_TITLE)`
  width: 15%;
`;
const TABLE_TITLE_6 = styled(TABLE_TITLE)`
  width: 8%;
`;

export default Network;

type Props = {};

type Selects = {
  player_name?: string | undefined;
  team?: string | undefined;
  school?: string | undefined;
  position?: string | undefined;
  age?: number | undefined;
  favorite?: number | undefined;
  profiles_count?: number | undefined;
  offset?: number | undefined;
};
