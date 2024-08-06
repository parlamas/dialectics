// Navbar.tsx

const Navbar = () => {
  const { userId } = useAuth();
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (!userId) {
      e.preventDefault();
      router.push('/sign-in');
    }
  };

  return (
    <nav className="navbar container mx-auto px-4 py-3 flex items-center justify-between">
      <Link href="/" className="text-lg font-semibold">
        Home
      </Link>
      <div className="flex space-x-4 lg:space-x-6">
        <Link href="/client" onClick={(e) => handleLinkClick(e, '/client')}>
          <a className="hover:text-gray-300">Content Request</a>
        </Link>
        <Link href="/protected/cv" onClick={(e) => handleLinkClick(e, '/protected/cv')}>
          <a className="hover:text-gray-300">Point</a>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        {!userId ? (
          <>
            <Link href="/sign-in">
              <a className="hover:text-gray-300">Login</a>
            </Link>
            <Link href="/sign-up">
              <a className="hover:text-gray-300">Sign Up</a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/profile">
              <a className="hover:text-gray-300">Profile</a>
            </Link>
            <UserButton />
          </>
        )}
      </div>
    </nav>
  );
};
