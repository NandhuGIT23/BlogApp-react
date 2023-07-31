import { Link } from "react-router-dom";

const BlogLists = (props) => {
    const blogs = props.blogs;
    return ( 
        <div className="blog-lists">
            {blogs.map((blogs) => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogLists;