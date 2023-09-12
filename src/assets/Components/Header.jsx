import profile from '../../../images/profile.png'

const Header = () => {
      return (
            <div className='md:flex max-w-6xl mb-11 mx-auto justify-between items-center p-3 border-b-2'>
                  <h1 className="text-5xl font-bold">Knowledge Cafe</h1>
                  <img src={profile} alt="" />
            </div>
      );
};

export default Header;