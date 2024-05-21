import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-7xl mx-auto p-3'>
            <Link to='/'>
                <img src="src/images/logo.png" alt="Logo" className='h-15'/>
            </Link>
            <div className='flex gap-1 items-center'>
                <button class="hidden sm:inline bg-transparent hover:bg-blue-60 text-blue-40 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Buy
                </button>
                <button class="hidden sm:inline bg-transparent hover:bg-blue-60 text-blue-40 font-semibold hover:text-white py-2 px-4  hover:border-transparent rounded">
                    Rent
                </button>
                <button class="hidden sm:inline bg-transparent hover:bg-blue-60 text-blue-40 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
                    Sell
                </button>
                <Link to='/log-in'>
                    <button class="w-35 bg-blue-70 hover:bg-blue-60 text-white font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ml-5">
                        Log in
                    </button>
                </Link>
            </div>
        </div>


        
    </header>
  )
}
