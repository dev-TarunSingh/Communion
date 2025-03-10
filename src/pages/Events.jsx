import { useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', category: '' });
  const [filter, setFilter] = useState('');

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', date: '', category: '' });
  };

  const filteredEvents = events.filter(event => 
    filter === '' || event.category === filter
  );

  return (
    <div>
      <h1>Event Listing</h1>
      <div>
        <label>
          Filter by Category:
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </label>
      </div>
      <ul>
        {filteredEvents.map((event, index) => (
          <li key={index}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.category}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
      <div>
        <h2>Add New Event</h2>
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
        />
        <select
          value={newEvent.category}
          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
        >
          <option value="Religious">Religious</option>
          <option value="Social">Social</option>
          <option value="Charity">Charity</option>
        </select>
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default Events;
