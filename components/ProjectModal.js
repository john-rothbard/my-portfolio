"use client";

import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
    const stop = (e) => e.stopPropagation();

    const { title, description, bullets, gallery } = project;

    return (
        // BACKDROP
        <div
            className="fixed inset-0 bg-white/20 backdrop-blur-xs z-[999] flex items-center justify-center"
            onClick={onClose}
        >
            {/* MODAL */}
            <div
                onClick={stop}
                className="
          overflow-x-hidden
          bg-black/90 text-gray
          border-6 border-white/50
          p-6
          rounded-4xl
          relative
          shadow-xl
          animate-[fadeIn_0.2s_ease-out_forwards]
          opacity-90
          backdrop-blur-3xl

          overflow-y-auto

          w-[75vw]
          h-[90vh]

          max-[600px]:rounded-none
          max-[600px]:rounded-t-2xl
          max-[600px]:top-[5vh]
          max-[600px]:left-0
          max-[600px]:right-0
          max-[600px]:bottom-0
          max-[600px]:w-full
          max-[600px]:max-h-[90vh]
          max-[600px]:h-auto
          max-[600px]:border-0
          max-[600px]:p-4
          max-[600px]:overflow-y-auto
          flex flex-col 
        "
            >
                {/* CLOSE BUTTON */}
                <button
                    className="absolute top-3 right-3 z-50
             px-3 py-1 rounded-md
             border border-white/40
             bg-white/10
             text-3xl font-bold
             hover:bg-white/20 transition"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* TITLE */}
                <div className="mb-6 pt-2">
                    <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                </div>

                <div className="-mx-6 border-t border-white/20 my-2" />
                <div className="-mx-6 border-t border-white/20 my-0" />


                {/* CONTENT */}
                <div className="space-y-8 pb-20">

                    {/* DESCRIPTION */}
                    {description && (
                        <p className="text-gray-200 text-lg leading-relaxed whitespace-pre-line">
                            {description}
                        </p>
                    )}
                <div className="border-t border-white/20 border-dashed my-6" />

                    {/* BULLETS */}
                    {bullets && bullets.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-gray-300 text-lg">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}
                    <div className="border-t border-white/20 border-dashed my-6" />

                    {/* GALLERY */}
                    {gallery && gallery.length > 0 && (
                        <div className="space-y-4">
                            {gallery.map((src, i) => (
                                <div
                                    key={i}
                                    className="relative w-full h-[250px] rounded-lg overflow-hidden"
                                >
                                    <Image
                                        src={src}
                                        alt={`${title} image ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                <button
                        onClick={onClose}
                        className="
                        w-full mt-2
                        py-2 text-l
                        bg-white/10 border border-white/30
                        rounded-md
                        hover:bg-white/20
                        transition
                    "
                    >
                        Close
                    </button>
            </div>
        </div>
    );
}
