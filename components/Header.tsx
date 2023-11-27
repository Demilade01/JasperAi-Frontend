import Link from 'next/link';

const Header = () => {
  return (
    <div className="bg-black text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-xl font-bold">Jasper</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/solutions">Solutions</Link>
          <Link href="/learn">Learn</Link>
          <Link href="/company">Company</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Log In</Link>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link href="/start-free-trial">
            <span className="bg-blue-500 text-white px-4 py-2 rounded">Start Free Trial</span>
          </Link>
          <Link href="/get-a-demo">
            <span className="bg-green-500 text-white px-4 py-2 rounded">Get A Demo</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;