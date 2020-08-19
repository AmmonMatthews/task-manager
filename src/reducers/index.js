import { EDIT_TASK, REMOVE_TASK } from "../actions/types";
import {
    CREATE_TASK_START,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE
} from "../actions/types"

const initialState = [
//     // {
//     //     id: 1,
//     //     title: " Learn ReactJS",
//     //     description: "Let's learn React JS today!",
//     //     status: "Completed"
//     // },
//     // {
//     //     id: 2,
//     //     title: "Learn Redux",
//     //     description: "Let's learn Redux today!",
//     //     status: "In Progress"
//     // },
//     // {
//     //     id: 3,
//     //     title: "Learn Mern",
//     //     description: "Let's learn Mern this is the next step!",
//     //     status: "Unstarted",
//     // }
];

const tasks = (state = { tasks: initialState }, action) => {
//     /*********************************************************
//      *                 if else version 
//      *********************************************************/
//     // if (action.type === EDIT_TASK) {
//     //     const {payload} = action;
//     //     return {
//     //         tasks: state.tasks.map((task) => {
//     //             if (task.id === payload.id) {
//     //                 return Object.assign({}, task, payload.params);
//     //             }
//     //             return task;
//     //         }),
//     //     };
//     // }

//     /***********************************************************
//      *                    switch version 
//      ***********************************************************/
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task;
                })
            
            }
        }
        case CREATE_TASK_SUCCESS: {
            return {
                tasks: state.tasks.concat(action.payload)
            };
        }
        case REMOVE_TASK: {
            return {
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        }
        default:
            return state;
    };
};

// const initialState = {
//     isAdded: false,
//     isLoading: false,
//     error: ""
// }

// export const tasks = (state = {tasks: initialState}, action) => {
//     switch (action.type) {
//         case CREATE_TASK_START:
//             return {
//                 ...state,
//                 isAdded: false,
//                 isLoading: true
//             }
//         case CREATE_TASK_SUCCESS:
//             return {
//                 ...state,
//                 isAdded: true,
//                 isLoading: false
//             }
//         case CREATE_TASK_FAILURE:
//             return {
//                 ...state,
//                 isAdded: false,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

export default tasks;