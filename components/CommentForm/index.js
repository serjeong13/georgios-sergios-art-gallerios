import React, {useState} from "react";
export default function CommentForm ({
    onSubmitComment
}) {
    const [commentText, setCommentText]=useState("");
    const handleSubmit = (event)=> {
        event.preventDefault();
        onSubmitComment(commentText);
        setCommentText("");
    }
    const handleTextChange = (event) => {
        setCommentText(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="comment">
            Comment:
            <textarea
            id="comment"
            name="comment"
            value={commentText}
            onChange={handleTextChange}
            />
        </label>
        <button type="submit">Send</button>
        </form>
    );
}