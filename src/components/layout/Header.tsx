
const Header = () => {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <img src="/emblem.svg" alt="Indian Emblem" className="h-10 w-10" />
            <a href="/" className="text-xl font-bold text-primary">
              Bharat Sewa Gateway
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
