
import PropTypes from 'prop-types';


const BookMark = ({bookMark}) =>{

            const {title} = bookMark;

            console.log(bookMark)

            return (
                  <div className='bg-white rounded-xl m-3 p-3'>

                  <h2>😙 {title}</h2>
                  </div>
            );
      }


BookMark.propTypes = {
      BookMark:PropTypes.func,
      bookMark: PropTypes.object
};

export default BookMark;