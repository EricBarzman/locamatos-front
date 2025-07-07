import Link from 'next/link'
import { FaRegCircleUser, FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";

function Header() {
  return (
    <header className='p-6 bg-[#203e47] text-white rounded-b-4xl'>
      <nav className='flex flex-row justify-between items-center'>

        <Link href="/" className='uppercase font-bold text-2xl'>
          Locamatos
        </Link>

        <ul className='flex justify-between uppercase items-center'>
          <div className='mr-6'>
            Catalogue
          </div>
          <div className='mr-6'>
            Projet et services
          </div>
          <div className='mr-6'>
            Contact
          </div>
          <button className='rounded-full p-2 border-1 cursor-pointer'>
            <FaMagnifyingGlass />
          </button>
        </ul>

        <div className='flex justify-between'>
          <Link className='rounded-full border-1 p-2 mr-3' href="/auth">
            <FaRegCircleUser />
          </Link>

          <Link className='rounded-full p-2 bg-amber-500' href="/cart">
            <FaCartShopping />
          </Link>
        </div>

      </nav>
    </header>
  )
}

export default Header