import React from "react";
import events from "../data/events";
import "./EventsPage.css";

const Events = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">We Helped Communities Connect & Flourish</h2>
      <p className="events-subtitle">✨ Upcoming Events</p>

      <div className="filters">
        {["Today", "Tomorrow", "This Week", "Next Week", "This Month"].map(
          (filter) => (
            <button key={filter} className="filter-btn">
              {filter}
            </button>
          )
        )}
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <div className="event-image-container">
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />
              <div className="date-badge">
                <p>{event.month}</p>
                <p>{event.day}</p>
              </div>
            </div>

            <div className="event-content">
              <span className={`event-tag ${event.tagClass}`}>{event.tag}</span>
              <h3 className="event-title">{event.title}</h3>
              <p className="event-date">
                📅 {event.date} <br /> ⏰ {event.time}
              </p>
              <a href="#" className="event-link">
                ⭐ Join others in this event
              </a>
            </div>

            <div className="event-button-container">
              <button className="event-button">Event Details →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
