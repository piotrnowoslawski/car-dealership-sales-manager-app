import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, PathNameInfo } from "./Dashboard.css";
import {
  Navigation,
  Wrapper,
  DashboardPanel,
  Users,
  UserInfo,
  UserAdd,
  UserEdit,
  Team,
  Sale,
  Reports,
  Workplaces,
} from "components";

const DashBoard = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/").pop().replace(/-/, " ");

  return (
    <Container>
      <Navigation
        items={[
          {
            id: "1",
            title: "Panel zarządzania",
            link: "/dashboard/control-panel",
            iconName: "panel zarządzania",
            iconPath: "dashboard",
          },
          {
            id: "2",
            title: "Użytkownicy",
            link: "/dashboard/users",
            iconName: "użytkownicy",
            iconPath: "users",
          },
          {
            id: "3",
            title: "Mój zespół",
            link: "/dashboard/team",
            iconName: "mój zespół",
            iconPath: "team",
          },
          {
            id: "4",
            title: "Sprzedaż",
            link: "/dashboard/sale",
            iconName: "sprzedaż",
            iconPath: "sale",
          },
          {
            id: "5",
            title: "Raporty",
            link: "/dashboard/reports",
            iconName: "raporty",
            iconPath: "reports",
          },
          {
            id: "6",
            title: "Salony",
            link: "/dashboard/workplaces",
            iconName: "miejsca pracy",
            iconPath: "workplace",
          },
        ]}
      />
      <Wrapper>
        {/* <PathNameInfo>{pathName}</PathNameInfo> */}
        <Switch>
          <Route path="/dashboard/control-panel" component={DashboardPanel} />
          <Route path="/dashboard/users/new" component={UserAdd} />
          <Route path="/dashboard/users/:userId/edit" component={UserEdit} />
          <Route exact path="/dashboard/users/:userId" component={UserInfo} />
          <Route exact path="/dashboard/users/" component={Users} />
          <Route path="/dashboard/team" component={Team} />
          <Route path="/dashboard/sale" component={Sale} />
          <Route path="/dashboard/reports" component={Reports} />
          <Route path="/dashboard/workplaces" component={Workplaces} />
        </Switch>
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
