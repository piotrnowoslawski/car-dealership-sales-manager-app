import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navigation } from "components";
import { Users } from "components";
import { UserInfo } from "components";
import { UserAdd } from "components";
import { UserEdit } from "components";

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
        <Route path="/dashboard/users/new" component={UserAdd} />
        <Route path="/dashboard/users/:userId/edit" component={UserEdit} />
        <Route path="/dashboard/users/:userId" component={UserInfo} />
        <Route path="/dashboard/users" component={Users} />
      </Switch>
    </>
  );
};

export default DashBoard;
