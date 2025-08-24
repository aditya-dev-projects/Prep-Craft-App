
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">DSA-prep</Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Link to="/#courses" className="hover:text-gray-300">Courses</Link>
          {/* Add other links here */}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link to="/auth">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
