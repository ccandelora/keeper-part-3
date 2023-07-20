import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevNote) => {
      console.log(value);
      if (name === "title") {
        return {
          title: value,
          content: prevNote.content
        };
      } else if (name === "content") {
        return {
          title: prevNote.title,
          content: value
        };
      }
    });
  }

  function handleSubmit(event) {
    setNote(note);
    props.addNote(note);
    event.preventDefault();
    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
