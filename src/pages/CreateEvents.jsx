import React, { useState } from "react";
import "./CreateEvent.css";

const CreateEvent = ({ addEvent }) => {
  const [event, setEvent] = useState({
    id: Date.now(),
    title: "",
    date: "",
    time: "",
    category: "",
    tag: "",
    tagClass: "",
    tagColor: "",
    image: "",
  });

  const [errors, setErrors] = useState({});

  const tagOptions = [
    { value: "DONATION", class: "tag-donation", color: "bg-blue-200 text-blue-700" },
    { value: "FREE", class: "tag-free", color: "bg-green-200 text-green-700" },
    { value: "PAID", class: "tag-paid", color: "bg-red-200 text-red-700" }
  ];

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleTagChange = (e) => {
    const selectedTag = tagOptions.find((tag) => tag.value === e.target.value);
    setEvent({
      ...event,
      tag: selectedTag.value,
      tagClass: selectedTag.class,
      tagColor: selectedTag.color,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!event.title.trim()) tempErrors.title = "Event title is required!";
    if (!event.category.trim()) tempErrors.category = "Event category is required!";
    if (!event.date.trim()) tempErrors.date = "Please select a date!";
    if (!event.time.trim()) tempErrors.time = "Please select a time!";
    if (!event.tag.trim()) tempErrors.tag = "Please select a tag!";
    if (!event.image.trim()) tempErrors.image = "Event image URL is required!";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("Event created successfully!");
  };

  return (
    <div className="create-event">
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Event Title</label>
        <input type="text" name="title" placeholder="Enter event title" value={event.title} onChange={handleChange} />
        {errors.title && <p className="error">{errors.title}</p>}

        <label>Category</label>
        <input type="text" name="category" placeholder="Enter event category" value={event.category} onChange={handleChange} />
        {errors.category && <p className="error">{errors.category}</p>}

        <label>Event Date</label>
        <input type="date" name="date" value={event.date} onChange={handleChange} />
        {errors.date && <p className="error">{errors.date}</p>}

        <label>Time</label>
        <input type="time" name="time" value={event.time} onChange={handleChange} />
        {errors.time && <p className="error">{errors.time}</p>}

        <label>Event Tag</label>
        <select name="tag" value={event.tag} onChange={handleTagChange}>
          <option value="">Select Tag</option>
          {tagOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
        {errors.tag && <p className="error">{errors.tag}</p>}

        <label>Event Image URL</label>
        <input type="text" name="image" placeholder="Enter image URL" value={event.image} onChange={handleChange} />
        {errors.image && <p className="error">{errors.image}</p>}

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
