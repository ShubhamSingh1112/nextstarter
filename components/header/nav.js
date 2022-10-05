import Link from 'next/link';

function Nav() {
    return(
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/about">
                        <a className="mr-5 hover:text-gray-900">About</a>
                    </Link>
                    <Link href="/events">
                        <a className="mr-5 hover:text-gray-900">Events</a>
                    </Link>
                    <Link href="/contact">
                        <a className="mr-5 hover:text-gray-900">Contact Us</a>
                    </Link>
                </nav>
    )
}

export default Nav;