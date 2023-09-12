
import {FaBookmark} from 'react-icons/fa';

import PropTypes from 'prop-types';

const Blog = ({ blog,BookMarkHandleClick,handleReadingTime}) => {

  const { author_img, author, cover,title,posted_date,reading_time,hashtags,id} = blog;


  return (
    <div className="mb-10">
      <img className="w-full" src={cover} alt="" />
      <div className='flex justify-between items-center px-2'>
        <div className='flex items-center mt-3'>
          <img className='w-16 space-y-3' src={author_img} alt="" />
          <div className='ml-5 space-y-1'>
          <h2 className='font-bold'>{author}</h2>
          <p>{posted_date}</p>
          </div>
        </div>
        <div className='flex gap-3 px-1 items-center'>
            <p>{reading_time} min read</p>
            <FaBookmark onClick={()=>{BookMarkHandleClick(blog)}} className='text-2xl text-green-600'/>
        </div>
      </div>
      <div className='px-2'>
      <h1 className='text-4xl leading-snug my-3 font-bold'>{title}</h1>
      <div className='flex gap-3 text-gray-500'>
      {
        hashtags.map((hash, idx)=> <p key={idx}><a href='#'>#{hash}</a></p>)
      }
      </div>
        <button onClick={()=>handleReadingTime(reading_time,id)} className='text-blue-600 my-2'>Mark as Read</button>
      </div>
    </div>
  );
};

// validation

Blog.propTypes = {
  blog: PropTypes.shape({
    author: PropTypes.string.isRequired, // Validate author as a required string
    title: PropTypes.string.isRequired, // Validate author as a required string
    posted_date: PropTypes.string.isRequired, // Validate author as a required string
    reading_time: PropTypes.string.isRequired, // Validate author as a required string
    cover: PropTypes.string.isRequired, // Validate cover as a required string
    author_img: PropTypes.string.isRequired, // Validate cover as a required string
    hashtags: PropTypes.array.isRequired,
    BookMarkHandleClick:PropTypes.func
  }),
};

export default Blog;