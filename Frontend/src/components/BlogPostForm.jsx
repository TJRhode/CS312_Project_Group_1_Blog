import React from "react";

const BlogPostForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ title, content, tags: tags.split(',').map(tag => tag.trim()) });
      setTitle('');
      setContent('');
      setTags('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default BlogPostForm;