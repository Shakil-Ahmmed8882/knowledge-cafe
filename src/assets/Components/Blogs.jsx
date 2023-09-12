import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
const Blogs = ({BookMarkHandleClick,handleReadingTime}) => {

      // use sate for storing blog data
      const [blogs, setBlog] = useState([])

      // use effect for fetching the data

      useEffect(()=>{
            fetch('https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json')
            .then(res => res.json())
            .then(data => setBlog(data))
      },[])



      return (
            <div className="w-2/3 flex">
                  <div>
                  {
                        blogs.map((blog,idx) => <Blog key={idx}
                         blog={blog}
                         BookMarkHandleClick={BookMarkHandleClick}
                         handleReadingTime={handleReadingTime}
                         ></Blog>)
                  }
                  <div>
                  </div>
                  </div>
            </div>
      );
};

export default Blogs;