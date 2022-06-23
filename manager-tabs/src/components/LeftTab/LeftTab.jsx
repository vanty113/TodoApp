import { LeftTabData } from "../../constant/LeftTabData"
import { Link } from "react-router-dom";
import '../LeftTab/lefttab.scss';
export function LeftTab() {
    return (<div className="todo-lefttab">
                {LeftTabData.map((item) => {
            return <div className="lefttab-item" key={item.id}>
                <Link to={item.path}>
                <span className="lefttab-title">{item.title}</span>
                </Link>
            </div>
        })}
    </div>)
};