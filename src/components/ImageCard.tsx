import { ReactNode } from "react";

export default function ImageCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full h-full">
      {/* Spinning border */}
      <div className="absolute right-1/2 top-1/2 image-card-animation blur-2xl"></div>

      {/* Content */}
      <div className="relative rounded-full p-1 bg-transparent h-full">
        {children}
      </div>
    </div>
  );
}
