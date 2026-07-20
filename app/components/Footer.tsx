export default function Footer() {
  return (
    <footer className="bg-[#2F3A3D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Pravi Learning Studio
            </h2>

            <p className="mt-4 text-gray-300">
              Turning "Huhs" into "Oohs"™
            </p>

            <p className="mt-2 text-gray-400">
              Launching in 2027
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-semibold">
              Navigation
            </h3>

            <ul className="mt-5 space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#courses" className="hover:text-white">Courses</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">
              Connect
            </h3>

            <p className="mt-5 text-gray-300">
              📧 pravilearningstudio@gmail.com
            </p>

            <p className="mt-2 text-gray-300">
              📍 Online Learning Studio
            </p>

            <p className="mt-2 text-gray-300">
              📷 @pravi_learningstudio
            </p>
          </div>

        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-gray-400">
          © 2027 Pravi Learning Studio. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}