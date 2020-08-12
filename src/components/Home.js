import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskPage from "./TaskPage";
import { editTask, createTask, removeTask } from "../actions";
import "../styles/index.scss"


function Home(props) {

    const onStatusChange = (id, status) => {
        props.dispatch(editTask(id, { status }))
    }
        ;

    const onCreateTask = ({ title, description }) => {
        props.dispatch(createTask({ title, description }))
    };

    const onRemoveTask = (id) => {
        props.dispatch(removeTask(id))
    };


    return (
        <>
            {/* <Login/> */}
            <TaskPage
                tasks={props.tasks}
                onStatusChange={onStatusChange}
                onCreateTask={onCreateTask}
                onRemoveTask={onRemoveTask}
            />
        </>
    );
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
    };
};

export default connect(mapStateToProps)(Home);
