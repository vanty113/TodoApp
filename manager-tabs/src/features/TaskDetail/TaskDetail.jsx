import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { TaskContext } from "../../App";
import { Layout } from "../../layouts/Layout";
import './TaskDetail.scss';

export function TaskDetail() {
    const { tasksData, updateData } = useContext(TaskContext);
    const [tasksDetail, setTasksDetail] = useState({
        title: "",
        creator: "",
        status: "",
        desscription: "",
    });
    const navigate = useNavigate();
    // const [platformValue, plaftormInputProps] = useRadioButtons("platform");

    const { id } = useParams();
    const newData = tasksData.find(item => item.id === id);
    useEffect(() => {
        setTasksDetail(newData)
    }, [newData])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setTasksDetail({
            ...tasksDetail,
            [name]: value,
        })
    }

    const onDeleteTask = () => {
        updateData(() => {
            return tasksData.filter((item) => item.id !== id)
        })
        navigate('/');
    }

    return (<div>
        <Layout>
            <form className="task-detail" onSubmit={handleSubmit}>
                <p>Title <input type="text" value={tasksDetail?.title} name="title" onChange={handleChangeInput} /></p>
                <p>Creator <input type="text" value={tasksDetail?.creator} name="creator" onChange={handleChangeInput} /></p>
                <p>Description <input type="text" value={tasksDetail?.desscription} name="desscription" onChange={handleChangeInput} /></p>
                <div className="radio-input">
                    <input type="radio" name="status" value="New" checked={tasksDetail?.value} onChange={handleChangeInput} /> New
                    <input type="radio" name="status" value="Doing" checked={tasksDetail?.value} onChange={handleChangeInput} /> Doing
                    <input type="radio" name="status" value="Done" checked={tasksDetail?.value} onChange={handleChangeInput} /> Done
                </div>
                <div className="submit-btn">
                    <input type="submit" value={'Save'} />
                    <input type="submit" value={'Reset'} />
                    <input type="submit" value={'Delete'} onClick={onDeleteTask} />
                </div>
            </form>
        </Layout>
    </div>)
}
// {platformValue === data?.value} {...plaftormInputProps}
// function useRadioButtons(name) {
//     const [value, setState] = useState(null);

//     const handleChange = e => {
//         setState(e.target.value);
//     };

//     const inputProps = {
//         name,
//         type: "radio",
//         onChange: handleChange
//     };

//     return [value, inputProps];
// }