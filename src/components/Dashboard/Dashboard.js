import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Container, PathNameInfo } from "./Dashboard.css";
import { Navigation } from "components";
import { Wrapper } from "components";
import { DashboardPanel } from "components";
import { Users } from "components";
import { UserInfo } from "components";
import { UserAdd } from "components";
import { UserEdit } from "components";

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
            link: "/dashboard/users/page/:1",
            iconName: "użytkownicy",
            iconPath: "users",
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
          <Route exact path="/dashboard/users/page/1" component={Users} />
          <Route path="/dashboard/users/page/:pageNumber" component={Users} />
        </Switch>
      </Wrapper>
    </Container>
  );
};

export default DashBoard;
