const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Fanfare - Showcase Your Work. All
          rights reserved.
        </p>
        <p className="mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
