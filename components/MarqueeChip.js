"use client";

export default function MarqueeChip({ items }) {
  const content = items.join(" | ");

  return (
    <div className="relative overflow-hidden rounded-full bg-gray-900/30 text-white px-4 py-2">
      
      {/* Fade edges */}
      <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-gray-900/30 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-gray-900/30 to-transparent pointer-events-none"></div>

      {/* Scrolling content */}
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4 text-lg md:text-xl">{content}</span>
        <span className="mx-4 text-lg md:text-xl">{content}</span> {/* duplicate for seamless loop */}
      </div>
    </div>
  );
}
