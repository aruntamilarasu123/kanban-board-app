import {
  MdOutlineError,
  MdDangerous,
  MdCheckCircle,
  MdClose,
} from "react-icons/md";

const COLORS = {
  warning: {
    main: "border-orange-200 bg-orange-50",
    bg: "bg-orange-500",
    text: "text-orange-600 hover:text-orange-800",
  },
  danger: {
    main: "border-red-200 bg-red-50",
    bg: "bg-red-500",
    text: "text-red-600 hover:text-red-800",
  },
  success: {
    main: "border-green-200 bg-green-50",
    bg: "bg-green-500",
    text: "text-green-600 hover:text-green-800",
  },
};

const ICONS = {
  warning: <MdOutlineError className="text-white text-xl sm:text-2xl" />,
  danger: <MdDangerous className="text-white text-xl sm:text-2xl" />,
  success: <MdCheckCircle className="text-white text-xl sm:text-2xl" />,
};

function Alert({ type, title, message, close }) {
  return (
    <div className="fixed z-50 bottom-4 w-full px-4 sm:px-0 flex justify-center">
      <div
        className={`grid border p-4 sm:p-5 w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-md items-center gap-3 sm:gap-4 ${COLORS[type].main}`}
        style={{ gridTemplateColumns: "auto 1fr auto" }}
      >
        {/* Icon */}
        <div className={`flex items-center justify-center p-2 rounded-full ${COLORS[type].bg}`}>
          {ICONS[type]}
        </div>

        {/* Message */}
        <div className="overflow-hidden">
          <h5 className="text-sm sm:text-base font-semibold text-gray-900">{title}</h5>
          <p className="text-xs sm:text-sm text-gray-700 truncate">{message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={close}
          className={`transition-colors p-1 rounded-full focus:outline-none ${COLORS[type].text}`}
          aria-label="Close Alert"
        >
          <MdClose className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Alert;
