import React from "react";
import Card from "../UI/Card/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    return (
        <>
            <Card className="expenses_item">
                <ExpenseItemDate date={props.date} />
                <div className="">
                    <div className="expenses_item__title">{props.title}</div>
                    <Card className="expenses_item__amount">
                        Rs. {props.amount}/-
                    </Card>
                </div>
            </Card>
        </>
    );
};

export default ExpenseItem;
