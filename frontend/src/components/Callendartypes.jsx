import React from "react";
// import "../styles/Callendartypes.css"

function Event ({ event, onDelete }) {
    // const formattedDate = new Date(event.created_at).toLocaleDateString("en-US")

    return (
        <div className="event-container">
            <p className="event-title">{event.title}</p>
            <p className="event-content">{event.summary}</p>
            {/* <p className="event-date">{formattedDate}</p> */}
            <button className="delete-button" onClick={() => onDelete(event.id)}>
                Delete
            </button>
        </div>
    );
}