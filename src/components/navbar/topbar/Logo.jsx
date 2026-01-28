const TopBarLogo = ({ school }) => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div
        className="
        w-10 h-10 rounded-xl
        bg-blue-600 text-white
        flex items-center justify-center
        font-bold
      "
      >
        {school?.initials || "ED"}
      </div>

      <span className="hidden sm:block font-semibold text-white">
        {school?.name || "Gestion École"}
      </span>
    </div>
  );
};

export default TopBarLogo;
