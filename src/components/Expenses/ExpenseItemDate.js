import React from "react";
import Card from "../UI/Card/Card";
import "./ExpenseItem.css";

const ExpenseItemDate = (props) => {
    const month = props.date.toLocaleString("en-IN", { month: "long" });
    const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
    const year = props.date.getFullYear();
    return (
        <Card className="expenses_item__date">
            <div className="day">{day}</div>
            <div className="month">{month}</div>
            <div className="year">{year}</div>
        </Card>
    );
};

export default ExpenseItemDate;
