import '../components/BoxTask.scss';

export function BoxTask({data, tasks}) {
    return (<div className="box-task">
            <b>Title: {data.title}</b>
            <p>Creator: {data.creator}</p>            
            <span>Status: {data.status}</span>
            <div className='todo-desscription'><b>Desscription:</b> {data.desscription}</div>
    </div>)
}