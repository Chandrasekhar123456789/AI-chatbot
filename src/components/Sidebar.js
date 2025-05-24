import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Conversations", path: "/conversations" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-white shadow-md h-full fixed md:relative z-10">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-8">BeyondChats</h1>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    \`block px-4 py-2 rounded transition-all duration-200 font-medium \${isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"}\`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;