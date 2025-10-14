import Image from "next/image";

export default function UnderConstruction() {
  return (
    <div className="relative flex flex-col gap-2 p-4 items-center justify-center  text-center text-white overflow-hidden">

      <Image
        src="/portal.png"
        alt="Rick and Morty Portal"
        width={340}
        height={340}
        className=" mb-6 animate-pulse-slow"
      />

      {/* Texto principal */}
      <h1 className="text-5xl font-bold text-stroke-200">
        Página en Construcción
      </h1>
      <p className="text-lg text-gray-300 mt-4 max-w-lg">
        ¡Morty! Todavía estamos ajustando los portales...  
        Vuelve pronto para explorar nuevos universos 🌌
      </p>

 
      <div className="mt-10 flex items-center gap-2 text-[#9cde1e]">
        <div className="w-3 h-3 bg-[#9cde1e] rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-[#9cde1e] rounded-full animate-pulse delay-150"></div>
        <div className="w-3 h-3 bg-[#9cde1e] rounded-full animate-pulse delay-300"></div>
      </div>

      <footer className="text-sm text-gray-500">
        © 2025 Portal Labs - Rick & Morty Fan Project
      </footer>
    </div>
  );
}
