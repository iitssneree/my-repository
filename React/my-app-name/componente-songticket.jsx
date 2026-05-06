import React from 'react';
import { PlayCircle, Calendar, User, Music } from 'lucide-react';

const SongTicket = ({ title, autor, year, videoUrl }) => {
  return (
    <div className="flex max-w-md bg-zinc-900 text-white rounded-xl overflow-hidden border border-zinc-700 shadow-2xl hover:scale-[1.02] transition-transform duration-300">
      {/* Sección Izquierda: Info Principal */}
      <div className="flex-1 p-6 border-r-2 border-dashed border-zinc-700 relative">
        {/* Círculos de "Perforación" Estética */}
        <div className="absolute -top-3 -right-3 w-6 h-6 bg-black rounded-full border border-zinc-700"></div>
        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-black rounded-full border border-zinc-700"></div>
        
        <div className="flex items-center gap-2 text-indigo-400 mb-2">
          <Music size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Now Playing</span>
        </div>
        
        <h2 className="text-2xl font-black truncate mb-1 italic">{title}</h2>
        
        <div className="flex items-center gap-2 text-zinc-400 mb-4">
          <User size={14} />
          <p className="text-sm font-medium">{autor}</p>
        </div>

        <div className="flex items-center gap-2 text-zinc-500">
          <Calendar size={14} />
          <span className="text-xs">{year}</span>
        </div>
      </div>

      {/* Sección Derecha: Acción/Video */}
      <a 
        href={videoUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-24 bg-indigo-600 hover:bg-indigo-500 flex flex-col items-center justify-center gap-2 transition-colors group"
      >
        <PlayCircle className="group-hover:scale-110 transition-transform" size={32} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Ver Video</span>
      </a>
    </div>
  );
};

export default SongTicket;