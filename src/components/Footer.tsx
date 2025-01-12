export function Footer() {
  return (
    <footer className="bg-navy-light py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
            <a href="/termly_3.html" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
            </a>
            <a href="/imprint" className="text-gray-400 hover:text-white transition-colors">
            Imprint
            </a>
        </div>
      </div>
    </footer>
  );
}