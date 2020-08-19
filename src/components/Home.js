import React from 'react';
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskPage from "./TaskPage";
import { editTask, createTask, removeTask } from "../actions";
import { useState, useEffect } from 'react'; 
import axios from 'axios';
import { axiosWithAuth } from "../utils/axiosWithAuth.js"
import "../styles/index.scss"


function Home(props) {
    const [state, setState] = useState() 

    useEffect(() => {
        axiosWithAuth()
            .get("/api/tasks")
            .then(res => {
                console.log("response", res)
            })
            .catch(err => { 
                console.log("error", err)
            })
        
    }, [])
    
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
        tasks: state.tasks.tasks
    };
};

export default connect(mapStateToProps)(Home);
