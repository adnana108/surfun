import "./resultPage.scss";
import Card from "../Components/Card";

function ResultPage({ conditions }) {
    const dayHours = [];

    for (let i = 0; i < 24; i = i + 2) {
        dayHours.push(conditions.hours[i])
    }


    return (
        <div className="resultPage">
                {dayHours.map((hour, index) => (
                    <Card key={index} hour={hour.time} airTemp = {hour.airTemperature.noaa} />
                ))}
        </div>
    )
}

export default ResultPage;