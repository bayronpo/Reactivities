import React, { FC, useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityForm from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import ActivityStore from "../../../app/stores/ActivityStore";
import "mobx-react-lite/batchingForReactDom";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";

const ActivityDashboard: FC = () => {
  const activityStore = useContext(ActivityStore);
  const { editMode, selectedActivity } = activityStore;
  console.log(editMode);
  console.log(selectedActivity);
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            activity={selectedActivity!}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
