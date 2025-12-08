import { BiX } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { RootState } from "../redux/store";
import { setToast } from "../redux/ToastSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Toast() {
  const dispatch = useDispatch();
  const timeoutRef = useRef<number | null>(null);
  const { isVisible, text, mode } = useSelector(
    (state: RootState) => state.toastSlice
  );

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (isVisible) {
      timeoutRef.current = setTimeout(() => {
        dispatch(setToast({ isVisible: false, text, mode }));
      }, 3000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, text, mode]);

  const handleClose = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    dispatch(setToast({ isVisible: false, text, mode }));
  };

  const getBgColor = () => {
    switch (mode) {
      case "SUCCESS":
        return "bg-green-600";
      case "ERROR":
        return "bg-red-600";
      case "WARNING":
        return "bg-yellow-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div
      className={`fixed right-1/2 translate-x-1/2 z-[100] transition-all duration-200 ${
        isVisible ? "opacity-100 top-4" : "opacity-0 -top-32"
      }`}
    >
      <article
        className={`${getBgColor()} p-4 text-white text-sm font-semibold flex items-center justify-between gap-4 rounded-lg min-w-96 shadow-lg`}
      >
        <span>{text}</span>
        <button
          onClick={handleClose}
          aria-label="Close toast"
          className="hover:bg-white/20 p-1 rounded transition-colors"
        >
          <BiX className="size-5" />
        </button>
      </article>
    </div>
  );
}
