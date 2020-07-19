import React, { useEffect, Fragment, useContext } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import { LoadingComponent } from "./LoadingComponent";
import ActivityStore from "../stores/ActivityStore";
import { observer } from "mobx-react-lite";
import "mobx-react-lite/batchingForReactDom";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);

  if (activityStore.loadingInitial) {
    return <LoadingComponent content="Loading activities..." />;
  }

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
