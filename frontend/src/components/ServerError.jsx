import { useNavigate } from "react-router-dom";

export const ServerError = ({
  message = "Something went wrong",
  onRetry,
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-[#121212] border border-gray-700 rounded-xl p-8 max-w-md text-center shadow-2xl">
        <div className="text-5xl mb-4">😕</div>

        <h2 className="text-2xl font-semibold text-white mb-2">
          Oops!
        </h2>

        <p className="text-gray-400 mb-6">
          {message}
        </p>

        <div className="flex gap-4 justify-center">
          {onRetry && (
            <button
              onClick={onRetry}
              className="
                px-6 py-2 rounded-lg
                bg-gradient-to-r from-[#e50914] to-[#ff4b2b]
                hover:scale-105 transition
              "
            >
              🔄 Retry
            </button>
          )}

          <button
            onClick={() => navigate("/")}
            className="
              px-6 py-2 rounded-lg
              bg-[#1f1f1f] border border-gray-600
              hover:bg-[#2a2a2a]
            "
          >
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
};
