import "./resultPage.scss";
import Card from "../Components/Card";

function ResultPage({ conditions }) {
    return (
        <div className="resultPage">
            <div>
                <Card cardDetails={conditions.hours[0].time} />
            </div>
        </div>
    )
}

export default ResultPage;