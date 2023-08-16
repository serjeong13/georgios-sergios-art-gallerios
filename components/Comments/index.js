import React from "react";
export default function Comments({ comments }) {
  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>{comment.text}</p>
            <p>{comment.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}