export function Footer() {
  return (
    <footer className="bg-navy-light py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Imprint
          </a>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 Score Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}