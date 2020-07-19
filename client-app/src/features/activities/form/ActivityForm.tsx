import React, { FC, useState, FormEvent, useContext } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity'
import { v4 as uuid } from 'uuid';
import ActivityStore from '../../../app/stores/ActivityStore';
import { observer } from 'mobx-react-lite';

interface IProps {
    setEditMode: (editMode: boolean) => void;
    activity : IActivity;
    editActivity : (actitivty: IActivity) => void;
    submitting: (boolean)
}

const ActivityForm: FC<IProps> = ({ setEditMode, activity: initialFormState, editActivity, submitting }) => {
    const activityStore = useContext(ActivityStore);
    const {createActivity} = activityStore;
    const initializeForm = () => {
        if (initialFormState){
            return initialFormState
        } else {
            return {
                id:'',
                title: '',
                category:'',
                description:'',
                date:'',
                city:'',
                venue:''
            };
        }
    };

    const [activity, setActtivity] = useState<IActivity>(initializeForm);

    const handleSubmit = () => {
        if(activity.id.length === 0) {
            let newActivity = {
                ...activity,
                id: uuid()
            }
            createActivity(newActivity);
        } else {
            editActivity(activity);
        }
    }

    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.currentTarget;
        setActtivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title}/>
                <Form.TextArea rows={2} onChange={handleInputChange} name='description' placeholder='Description' value={activity.description}/>
                <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value={activity.category}/>
                <Form.Input onChange={handleInputChange} type='datetime-local' name='date' placeholder='Date' value={activity.date}/>
                <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={activity.city}/>
                <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={activity.venue}/>
                <Button floated='right' positive type='submit' content='Submit' loading={submitting}/>
                <Button onClick={() => setEditMode(false)} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default observer (ActivityForm);