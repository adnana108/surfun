import "./resultPage.scss";

function ResultPage({ conditions }) {
    return (
        <div className="resultPage">
            {conditions.map((condition, i) => (
                <div>
                    {condition}
                </div>
            ))
            }
        </div>
    )
}

export default ResultPage;