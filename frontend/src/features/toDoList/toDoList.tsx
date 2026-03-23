import {useDispatch, useSelector} from "react-redux";
import {addNewTask, removeTask, toggleTask} from "./toDoListSlice.ts";
import type {RootState} from "../../app/store.ts";
import {useState} from "react";

const ToDoList = () => {
    const dispatch = useDispatch();
    const { tasks } = useSelector((state: RootState) => state.toDoList);
    const [newTaskText, setNewTaskText] = useState("");

    const handleAddTask = () => {
        if (newTaskText.trim()) {
            dispatch(addNewTask(newTaskText.trim()));
            setNewTaskText("");
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">

                    <div className="input-group mb-4">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Введите новую задачу..."
                            value={newTaskText}
                            onChange={(e) => setNewTaskText(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
                        />
                        <button
                            className="btn btn-primary btn-lg"
                            onClick={handleAddTask}
                        >
                            Добавить
                        </button>
                    </div>


                    <div className="toDoList list-group">
                        {tasks?.ids?.map((taskID) => {
                            const task = tasks.entities[taskID];
                            return (
                                <div key={taskID} className="list-group-item d-flex align-items-center gap-3">
                                    <input
                                        type="checkbox"
                                        className="form-check-input fs-5"
                                        checked={task.completed}
                                        onChange={() => dispatch(toggleTask(taskID))}
                                    />
                                    <span className={`flex-grow-1 ${task.completed ? 'text-decoration-line-through text-secondary' : ''}`}>
                                        {task.text}
                                    </span>
                                    <button
                                        onClick={() => dispatch(removeTask(taskID))}
                                        className="btn btn-sm btn-outline-danger rounded-circle"
                                        style={{ width: '32px', height: '32px' }}
                                    >
                                        ×
                                    </button>
                                </div>
                            )
                        })}
                    </div>



                </div>
            </div>
        </div>

    )
}

export default ToDoList;
