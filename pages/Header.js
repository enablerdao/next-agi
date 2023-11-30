import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className='bg-blue-500 text-white text-center p-4 font-sans'>
      <h1 className='text-4xl font-bold'>
        <FontAwesomeIcon icon={faCoffee} /> File Operations API
      </h1>
    </header>
  );
}

export default Header;