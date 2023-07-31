import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import BlogLists from "./BlogLists";

const Home = () => {
    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {isLoading && <div>Please wait..the page is loading</div>}
            {blogs && <BlogLists blogs={blogs} title='All Blogs'/>}
        </div>
     );
}
 
export default Home;