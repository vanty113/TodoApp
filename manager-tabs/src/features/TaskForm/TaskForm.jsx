import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 } from 'uuid';
import { Layout } from "../../layouts/Layout";
import './TaskForm.scss';
import { TaskContext } from "../../App";


export function TaskForm() {
    const { tasksData, updateData } = useContext(TaskContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (dt, e) => {
        e.preventDefault();

        const newData = [
            {
                id: v4(),
                title: dt.taskTitle,
                creator: dt.taskCreator,
                status: "New",
                desscription: dt.taskDescription
            }, ...tasksData]

        updateData(newData);
        navigate("/");
    };

    const onError = (errors, e) => console.log(errors, e);

    return (<div>
        <Layout>
            <form className="task-form" onSubmit={handleSubmit(onSubmit, onError)}>
                <p>Title <input {...register("taskTitle", { required: true })} placeholder="Name of Title" /></p>
                <p>Creator <input {...register("taskCreator", { required: true })} placeholder="Name of Creator" /></p>
                <p>Description <input {...register("taskDescription", { required: true })} placeholder="Description Details" /></p>
                <input className="submit-btn" type="submit" value={'Save'} />
            </form>
        </Layout>
    </div>)
};