import { useEffect, useState } from "react";
import { useContext } from "react";
import { TaskContext } from "../App";
import { Header } from "../components/Header/Header";
import { LeftTab } from "../components/LeftTab/LeftTab";
import '../layouts/Layout.scss';


export function Layout({ children }) {
    const { tasksData, updateData } = useContext(TaskContext);
    const [filters, setFilters] = useState(tasksData);

    const handleFiltersChange = (newFilters) => {
        switch (newFilters.searchTerm) {
            case newFilters.searchTerm:
                const resultFilters = filters.filter(item => item.title.toLowerCase().includes(newFilters.searchTerm) || item.creator.toLowerCase().includes(newFilters.searchTerm));
                updateData(resultFilters);
                break;
                
            default:
                setFilters(tasksData);
                break;
        }
    }

    return (<div>
        <Header onSubmit={handleFiltersChange} />
        <div className="container">
            <LeftTab />
            {children}
        </div>
    </div>)

}