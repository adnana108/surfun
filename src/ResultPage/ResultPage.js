import "./resultPage.scss";
import Card from "../Components/Card";

function ResultPage({ conditions }) {
    return (
        <div className="resultPage">
            {console.log(conditions.hours)}
            <div>
                Azi
                <Card cardDetails={conditions.hours[0].time} />
            </div>
            <div>Maine</div>
            <div>poimaine</div>
        </div>
    )
}

export default ResultPage;