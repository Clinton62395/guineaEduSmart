// src/components/topbar/TopBar.jsx
import React from "react";
import TopBarLogo from "./Logo";
import TopBarRoleBadge from "./Bagde";
import TopBarNotifications from "./Notification";
import { Menu, X } from "lucide-react";
import TopBarUserMenu from "./UserMenu";

const CommonTopBar = ({
  user,
  role,
  school,
  notifications,
  onMenuClick,
  onLogout,
  onThemeToggle,
}) => {
  return (
    <header
      className="
        sticky top-0 z-50
        w-full h-[72px]
        backdrop-blur-xl
        bg-blue-600/20
        border-b border-white/10
      "
    >
      <div className="h-full px-4 md:px-6 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            {/* loco */}
            {onMenuClick ? <X /> : <Menu />}
          </button>
          <TopBarLogo school={school} />
        </div>

        {/* CENTER */}
        <div className="hidden md:block">
          <TopBarRoleBadge role={role} />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <TopBarNotifications notifications={notifications} />
          <TopBarUserMenu
            user={user}
            role={role}
            onLogout={onLogout}
            onThemeToggle={onThemeToggle}
          />
        </div>
      </div>
    </header>
  );
};

export default CommonTopBar;
