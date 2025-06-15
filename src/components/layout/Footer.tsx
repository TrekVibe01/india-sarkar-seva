
import AudioPlayer from '@/components/AudioPlayer';

const Footer = () => {
  return (
    <footer className="bg-muted py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2">
            <p>&copy; {new Date().getFullYear()} Bharat Sewa Gateway. All Rights Reserved.</p>
            <AudioPlayer src="/indian-anthem.mp3" />
        </div>
        <p className="text-sm mt-2">
          This is a conceptual portal for easy access to Indian Government services.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-primary">About Us</a>
          <a href="#" className="hover:text-primary">Contact</a>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
