import { useState } from "react";
import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TaskContext } from "../../App";
import { Layout } from "../../layouts/Layout";
import { BoxTask } from "./components/BoxTask";
import { Link } from "react-router-dom";
import './ListTask.scss';
import { Pagination } from "./components/pagination/Pagination";


function ListTask() {
    const { tasksData } = useContext(TaskContext);
    const [data, setData] = useState(tasksData);
    // const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(1);
    const [tasksPerPage] = useState(12);

    const indexOfLastPage = currentPage * tasksPerPage;
    const indexOfFirstPage = indexOfLastPage - tasksPerPage;
    const currentTasks = tasksData.slice(indexOfFirstPage, indexOfLastPage);

    useEffect(() => {
        setData(tasksData);
    }, [tasksData]);

    const [searchParams] = useSearchParams();
    let tab = searchParams.get('tab')
    useEffect(() => {
        switch (tab) {
            case 'new':
                const newData = tasksData.filter(item => item.status === 'New')
                setData(newData)
                break;
            case 'doing':
                const doingData = tasksData.filter(item => item.status === 'Doing')
                setData(doingData)
                break;

            case 'done':
                const doneData = tasksData.filter(item => item.status === 'Done')
                setData(doneData)
                break;

            default:
                setData(tasksData)
                break;
        }
    }, [tab])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handlePrevClick = () => {
        setCurrentPage(currentPage - 1);
    }

    const handleNextClick = () => {
        setCurrentPage(currentPage + 1);
    }

    return (<div>
        <Layout>
            <div className="list-task-container">
                <div className="list-task">
                    {data.map((item, index) => index <= 11&&(<Link to={`/task-detail/${item.id}`}><BoxTask key={item.id} data={item} /></Link>))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    tasksPerPage={tasksPerPage}
                    totalTasks={tasksData.length}
                    paginate={paginate}
                    handlePrevClick={handlePrevClick}
                    handleNextClick={handleNextClick}
                />
            </div>
        </Layout>
    </div>)
}

export default ListTask;