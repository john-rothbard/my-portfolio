"use client";

import { useRef, useState } from "react";
import Image from "next/image";

export default function ProjectModal({ project, onClose }) {
    const stop = (e) => e.stopPropagation();

    const { title, description, bullets, gallery } = project;

    // ---- swipe state ----
    const startY = useRef(0);
    const scrollTopAtStart = useRef(0);
    const [offsetY, setOffsetY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const dragY = useRef(0);


    const CLOSE_THRESHOLD = 30;

    function onPointerDown(e) {
        if (window.innerWidth > 600) return;
    
        startY.current = e.clientY;
        scrollTopAtStart.current = e.currentTarget.scrollTop;
        dragY.current = 0;
    
        setDragging(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    }
    
    function onPointerMove(e) {
        if (!dragging) return;
    
        const delta = e.clientY - startY.current;
    
        if (delta > 0 && scrollTopAtStart.current === 0) {
            e.preventDefault();
    
            dragY.current = delta;   
            setOffsetY(delta);      
        }
    }
    
    function onPointerUp(e) {
        if (!dragging) return;
    
        setDragging(false);
        e.currentTarget.releasePointerCapture(e.pointerId);
    
        if (dragY.current > CLOSE_THRESHOLD) {
            onClose();
        } else {
            dragY.current = 0;
            setOffsetY(0);
        }
    }
    
    return (
        // BACKDROP
        <div
            className="fixed inset-0 bg-[var(--color-border)]/20 backdrop-blur-xs z-[999] flex items-center justify-center"
            onClick={onClose}
        >
            {/* MODAL */}
            <div
                onClick={stop}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
                className="
                    overflow-x-hidden
                    bg-[var(--color-bg)] text-[var(--color-text)]
                    p-6
                    rounded-3xl
                    relative
                    shadow-xl
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
                style={{
                    transform: `translateY(${offsetY}px)`,
                    transition: dragging ? "none" : "transform 0.25s ease",
                }}
            >

                {/* CLOSE BUTTON */}
                <button
                    className="absolute top-4 right-4 z-50
                        px-3 py-1 rounded-md
                        border border-[var(--color-border)]
                        text-3xl font-bold
                        hover:bg-[var(--color-muted)]/20 transition"
                    onClick={onClose}
                >
                    ×
                </button>

                {/* TITLE */}
                <div className="mb-6 pt-2">
                    <h1 className="text-3xl sm:text-4xl font-bold">{title}</h1>
                </div>

                <div className="-mx-6 border-t border-[var(--color-border)]/70 my-2" />
                <div className="-mx-6 border-t border-[var(--color-border)]/70 my-0" />

                {/* CONTENT */}
                <div className="space-y-8 pb-20">
                    {description && (
                        <p className="text-[var(--color-text)]/60 text-lg leading-relaxed whitespace-pre-line">
                            {description}
                        </p>
                    )}

                    <div className="border-t border-[var(--color-border)]/70 border-dashed my-6" />

                    {bullets && bullets.length > 0 && (
                        <ul className="list-disc list-inside space-y-2 text-[var(--color-text)] text-lg">
                            {bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}

                    <div className="border-t border-[var(--color-border)]/70 border-dashed my-6" />

                    {gallery && gallery.length > 0 && (
                        <div className="space-y-4">
                            {gallery.map((src, i) => (
                                <div key={i} className="w-full rounded-lg overflow-hidden">
                                    <Image
                                        src={src}
                                        alt={`${title} image ${i}`}
                                        width={1000}
                                        height={1000}
                                        className="object-contain"
                                        style={{ width: "100%", height: "auto" }}
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
                        bg-white/10 border border-[var(--color-border)]/70
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
