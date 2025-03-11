import React, { useState, useEffect } from "react";
import events from "../data/events";
import "./EventsPage.css";

const Events = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredEvents, setfilteredEvents] = useState([]);

  useEffect(() => {
    if (categoryFilter === "") {
      setfilteredEvents(events);
    } else {
      setfilteredEvents(events.filter(event => event.category === categoryFilter));
    }
  }, [categoryFilter]);

  return (
    <section className="events-section">
      <h2 className="events-title">We Helped Communities Connect & Flourish</h2>
      <p className="events-subtitle">✨ Upcoming Events</p>

      <div className="filters">
        {["All", "Religious", "Social", "Charity"].map((filter) => (
          <button
            key={filter}
            className="filter-btn"
            onClick={() => setCategoryFilter(filter === "All" ? "" : filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="events-grid">
        {filteredEvents.map((event) => (
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
              <p className="event-date"/>
                📅 {event.date} <br /> ⏰ {event.time}
              <a href={event.link} className="event-link">
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
