import { GiTireIronCross } from "react-icons/gi";

const Features = ({ screen, setscreen }) => {
  return (
    <>
      {/* 1. LAPTOP / DESKTOP SCREEN MENU (Wrapped in <ul>) */}
      <ul className="hidden md:flex gap-4 text-2xl list-none m-0 p-0">
        <li className="cursor-pointer hover:text-blue-500">Home</li>
        <li className="cursor-pointer hover:text-blue-500">About</li>
        <li className="cursor-pointer hover:text-blue-500">Contact</li>
        <li className="cursor-pointer hover:text-blue-500">Service</li>
        <li className="cursor-pointer hover:text-blue-500">Help</li>
      </ul>

      {/* 2. BACKGROUND OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 md:hidden ${
          screen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setscreen(false)}
      />

      {/* 3. ANIMATED MOBILE SIDEBAR DRAWER (Wrapped in <ul>) */}
      <ul
        className={`fixed top-0 left-0 h-screen w-64 bg-amber-300 p-5 flex flex-col gap-5 text-2xl list-none z-50 transition-transform duration-300 ease-in-out  ${
          screen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button Row */}
        <div className="flex justify-end w-full">
          <GiTireIronCross
            className="text-2xl cursor-pointer hover:text-red-600 transition-colors"
            onClick={() => setscreen(false)}
          />
        </div>

        {/* Mobile Sidebar Links */}
        <li className="hover:translate-x-2 transition-transform cursor-pointer">Home</li>
        <li className="hover:translate-x-2 transition-transform cursor-pointer">About</li>
        <li className="hover:translate-x-2 transition-transform cursor-pointer">Contact</li>
        <li className="hover:translate-x-2 transition-transform cursor-pointer">Service</li>
        <li className="hover:translate-x-2 transition-transform cursor-pointer">Help</li>
      </ul>
    </>
  );
};

export default Features;
