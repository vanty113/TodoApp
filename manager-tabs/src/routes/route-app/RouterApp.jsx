import { Route, Routes } from "react-router-dom";
import ListTask from "../../features/ListTask";
import { TaskDetail } from "../../features/TaskDetail/TaskDetail";
import { TaskForm } from "../../features/TaskForm/TaskForm";

 function RouterApp() {
    return (
    <Routes>
        <Route path="/" element={<ListTask/>}/>
        <Route path="/new-task" element={<TaskForm/>}/>
        <Route path="/task-detail/:id" element={<TaskDetail/>}></Route>
    </Routes>
   )
}
export default RouterApp;