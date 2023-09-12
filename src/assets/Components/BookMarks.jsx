import PropTypes from 'prop-types';
import BookMark from './BookMark';



const BookMarks = ({bookMark,readingTime}) => {


      const styles = 'text-2xl bg-white p-3 mx-3 text-center rounded-lg mt-3 font-bold'
      
      return (
            <div className="w-1/3 h-screen fixed top-32 right-5 rounded-lg bg-gray-300 ml-4">
                  <h1 className={styles}>Reading time <span className='text-purple-500'>{readingTime}</span></h1>
                  <h1 className={styles}> Add to Book-Mark 📗</h1>
                  {bookMark && bookMark.map((b,idx)=> <BookMark key={idx} bookMark={b}></BookMark>)}
            </div>
      );
};


BookMarks.propTypes = {
            BookMarks: PropTypes.func,
            bookMark:PropTypes.object,
            readingTime:PropTypes.string.isRequired
};

export default BookMarks;