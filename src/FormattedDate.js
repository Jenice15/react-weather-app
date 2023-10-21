import React from "react";

export default function FormattedDate(props) {
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    // let date = props.date.getDate();
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    return (
        <div>
            {day} {hour} : {minutes}
        </div>
    );
}
