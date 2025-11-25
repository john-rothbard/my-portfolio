"use client";

export default function ProjectModal({ title, onClose }) {
  const stop = (e) => e.stopPropagation();

  return (
    // BACKDROP
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] flex items-center justify-center"
      onClick={onClose}
    >
      {/* MODAL */}
      <div
        onClick={stop}
        className="
          bg-black text-white
          border-8 border-black
          p-6
          rounded-xl
          relative
          shadow-2xl
          animate-[fadeIn_0.2s_ease-out_forwards]
          opacity-90

          /* Scrollable modal content */
          overflow-y-auto

          /* Desktop/tablet size */
          w-[min(800px,90%)]
          h-[min(600px,90%)]

          /* Mobile (<=600px) takes up whole screen except top 5% */
          max-[600px]:rounded-t-2xl
          max-[600px]:top-[5vh]
          max-[600px]:left-0
          max-[600px]:right-0
          max-[600px]:bottom-0
          max-[600px]:w-full
          max-[600px]:h-[99vh]
          max-[600px]:border-2
          max-[600px]:p-4

          /* ensures overflow on mobile */
          max-[600px]:overflow-y-auto
        "
      >
        {/* CLOSE BUTTON */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold cursor-pointer z-50"
          onClick={onClose}
        >
          ×
        </button>

        {/* TITLE */}
        <div className="mb-6 pt-2">
          <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
        </div>

        {/* CONTENT (scrolls independently) */}
        <div className="space-y-6 pb-20">
          <div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Your project description goes here. This content scrolls on all
              devices. On mobile, the modal becomes full-screen minus the top
              5%, and the page behind it does not scroll.
            </p>
          </div>

          <div className="w-full h-[250px] bg-gray-800 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">image placeholder</span>
          </div>

          <p className="text-gray-400">
            Add more content to test scrolling. Add more content to test
            scrolling. Add more content to test scrolling. Add more content to
            test scrolling.<br></br><br></br><br></br><br></br>poo<br></br><br></br><br></br><br></br>poopers
          </p>

          <p className="text-gray-400">
            More content.
          </p>
        </div>
      </div>
    </div>
  );
}
