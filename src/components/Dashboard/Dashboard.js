import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "components";
import { Users } from "components";
import { UserInfo } from "components";

const DashBoard = () => {
  return (
    <>
      <Navigation
        items={[
          { id: "1", content: "dashboard", link: "/dashboard" },
          { id: "2", content: "users", link: "/dashboard/users" },
        ]}
      />
      <Switch>
        <Route path="/dashboard" exact>
          dashboard
        </Route>
        <Route path="/dashboard/users" exact component={Users} />
        <Route path="/dashboard/users/:userId" exact component={UserInfo} />
      </Switch>
    </>
  );
};

export default DashBoard;
