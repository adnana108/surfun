import "./resultPage.scss";
import Card from "../Components/Card";

function ResultPage({ conditions }) {
    return (
        <div className="resultPage">
            {console.log(conditions.hours[0])}
            {conditions.map(([condition, i])=>{
                console.log(condition.hours[i])
            })}
        </div>
    )
}

export default ResultPage;