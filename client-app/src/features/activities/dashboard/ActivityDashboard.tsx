import React, { FC, SyntheticEvent, useContext } from 'react'
import { Grid } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import ActivityForm from '../form/ActivityForm'
import { observer } from 'mobx-react-lite'
import ActivityStore from '../../../app/stores/ActivityStore'
import 'mobx-react-lite/batchingForReactDom'
import ActivityList from './ActivityList'
import ActivityDetails from '../Details/ActivityDetails'

interface IProps {
    setEditMode: (editMode: boolean) => void;
    setSelectedActivity: (activity: IActivity | null) => void;
    editActivity: (actitivty: IActivity) => void;
    deleteActivity: (event: SyntheticEvent<HTMLButtonElement>, id: string) => void;
    submitting: (boolean);
    target: (string)
}

const ActivityDashboard: FC<IProps> = ({ setEditMode, setSelectedActivity, editActivity, deleteActivity, submitting, target }) => {
    const activityStore = useContext(ActivityStore);
    const { editMode, selectedActivity } = activityStore;
    console.log(editMode);
    console.log(selectedActivity);
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList deleteActivity={deleteActivity} submitting={submitting} target={target} />
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode && (<ActivityDetails setEditMode={setEditMode} setSelectedActivity={setSelectedActivity} />)}
                {editMode && (<ActivityForm key={selectedActivity && selectedActivity.id || 0} setEditMode={setEditMode} activity={selectedActivity!} editActivity={editActivity} submitting={submitting} />)}
            </Grid.Column>
        </Grid>
    )
}

export default observer(ActivityDashboard);