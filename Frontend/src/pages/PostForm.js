import React, { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostForm = () => {
  const authorInput = useRef(null);
  const descInput = useRef(null);
  const navigate = useNavigate();
  const [Img, setImg] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = authorInput.current.value;
    const desc = descInput.current.value;

    try {
      // Uncomment this when you're ready to make the API call
      // await axios.post('http://localhost:5000/addquotes', { author, desc });
      navigate("/");
    } catch (error) {
      console.log("Something went wrong");
    }
  };

  return (
    <form onSubmit={submitHandler} style={styles.form}>
      <div style={styles.inputGroup}>
        <label htmlFor="author" style={styles.label}>
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={authorInput}
          placeholder="title"
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label htmlFor="desc" style={styles.label}>
          Description
        </label>
        <textarea
          id="desc"
          ref={descInput}
          placeholder="Write some desc..."
          style={styles.textarea}
        />
      </div>
      <div style={styles.inputGroup}>
        <label htmlFor="desc" style={styles.label}>
          Add Img/Video
        </label>
        <input
          type="file"
          id="img"
          accept="application/pdf"
          onChange={(e) => setImg((prev) => e.target.files[0])}
        />
      </div>

      <button style={styles.button}>Submit</button>
    </form>
  );
};

// Styles
const styles = {
  form: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "50px auto",
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    minHeight: "100px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default PostForm;
