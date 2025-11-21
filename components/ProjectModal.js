"use client";

export default function ProjectModal({ title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center">

      <div className="bg-white border-8 border-black p-6 w-[calc(100%-32px)] h-[calc(100%-32px)] rounded-xl relative">
        
        <button
          className="absolute top-4 right-4 text-2xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h1 className="text-4xl font-bold">{title}</h1>
      </div>

    </div>
  );
}
