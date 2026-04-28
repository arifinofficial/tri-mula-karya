// "use client";

// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";

// // ============================================================
// // DATA — ganti sesuai kebutuhan
// // ============================================================
// const whatsappContacts = [
//     {
//         label: "General",
//         name: "Andi Pratama",
//         number: "6281122334455",
//     },
// ];
// // ============================================================

// const WhatsappFloat = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
//     const overlayRef = useRef<HTMLDivElement>(null);
//     const tlRef = useRef<gsap.core.Timeline | null>(null);

//     useEffect(() => {
//         const items = itemsRef.current.filter(Boolean) as HTMLElement[];

//         // Set initial state
//         gsap.set(items, { opacity: 0, y: 16, pointerEvents: "none" });

//         tlRef.current = gsap.timeline({ paused: true })
//             .to(items, {
//                 opacity: 1,
//                 y: 0,
//                 pointerEvents: "auto",
//                 duration: 0.35,
//                 ease: "power3.out",
//                 stagger: {
//                     each: 0.07,
//                     from: "end",
//                 },
//             });
//     }, []);

//     const toggle = () => {
//         if (!tlRef.current) return;

//         if (isOpen) {
//             tlRef.current.reverse();
//         } else {
//             tlRef.current.play();
//         }

//         setIsOpen((prev) => !prev);
//     };

//     const handleOverlayClick = () => {
//         if (!isOpen) return;
//         tlRef.current?.reverse();
//         setIsOpen(false);
//     };

//     return (
//         <>
//             {/* Backdrop overlay */}
//             <div
//                 ref={overlayRef}
//                 onClick={handleOverlayClick}
//                 className={`fixed inset-0 z-40 transition-none ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
//             />

//             {/* Floating container */}
//             <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

//                 {/* Contact cards */}
//                 <div className="flex flex-col items-end gap-2.5">
//                     {whatsappContacts.map((contact, i) => (
//                         <a
//                             key={contact.number}
//                             ref={(el) => { itemsRef.current[i] = el; }}
//                             href={`https://wa.me/${contact.number}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="group flex items-center gap-3 bg-[#1A1A19] border border-white/10 rounded-full pl-4 pr-3 py-2.5 shadow-xl shadow-black/30 hover:bg-[#F8FAFC] transition-colors duration-300"
//                         >
//                             <div className="text-right">
//                                 <span className="block text-[10px] font-medium tracking-widest uppercase text-white/40 group-hover:text-[#1A1A19]/50 transition-colors duration-300 leading-none mb-0.5">
//                                     {contact.label}
//                                 </span>
//                                 <span className="block text-sm font-medium text-[#F8FAFC] group-hover:text-[#1A1A19] transition-colors duration-300 leading-none">
//                                     {contact.name}
//                                 </span>
//                             </div>

//                             {/* Mini WA icon */}
//                             <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
//                                 <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
//                                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                                 </svg>
//                             </div>
//                         </a>
//                     ))}
//                 </div>

//                 {/* Main trigger button */}
//                 <button
//                     onClick={toggle}
//                     aria-label={isOpen ? "Close WhatsApp menu" : "Open WhatsApp menu"}
//                     className="relative w-12 h-12 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 flex items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
//                 >
//                     {/* WA icon */}
//                     <svg
//                         viewBox="0 0 24 24"
//                         className={`w-6 h-6 fill-white absolute transition-all duration-300 ${isOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
//                     >
//                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                     </svg>

//                     {/* Close icon */}
//                     <svg
//                         viewBox="0 0 24 24"
//                         className={`w-6 h-6 stroke-white absolute transition-all duration-300 ${isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
//                         fill="none"
//                         strokeWidth={2.5}
//                         strokeLinecap="round"
//                     >
//                         <path d="M6 18L18 6M6 6l12 12" />
//                     </svg>

//                     {/* Pulse ring */}
//                     {!isOpen && (
//                         <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
//                     )}
//                 </button>
//             </div>
//         </>
//     );
// };

// export default WhatsappFloat;


"use client";

const WhatsappFloat = () => {
    const phoneNumber = "6281122334455";

    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform duration-300"
            aria-label="Chat via WhatsApp"
        >
            <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-white"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {/* Optional pulse */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        </a>
    );
};

export default WhatsappFloat;