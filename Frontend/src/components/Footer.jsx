export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© {currentYear} Vishesh Sharma. All rights reserved.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Designed and built with <span className="text-red-500">❤</span> by Vishesh Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 