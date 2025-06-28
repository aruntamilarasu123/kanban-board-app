import { MdWarning } from 'react-icons/md';

const ConfirmDialog = ({
  headerText = 'Confirm',
  bodyText = 'Are you sure?',
  confirmText = 'Okay',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30"></div>

      {/* Modal Card */}
      <div className="relative z-10 bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4">
          {/* Icon */}
          <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 rounded-full border border-red-300 bg-red-50">
            <MdWarning className="text-red-500 text-3xl" />
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-semibold text-gray-800">{headerText}</h2>
            <p className="mt-1 text-sm text-gray-600">{bodyText}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-end gap-3">
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
