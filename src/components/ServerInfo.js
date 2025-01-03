import React from 'react';

export default function ServerInfo() {
  return (
    <div className="min-h-screen bg-[#0d1117] bg-gradient-to-b from-[rgba(13,17,23,0.9)] to-[rgba(13,17,23,0.7)] text-white p-6">
      {/* Header Navigation */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <span>MULTIPLAYER</span>
        <span>/</span>
        <span>SERVER BROWSER</span>
        <span>/</span>
      </nav>
      
      <h1 className="text-4xl font-bold mb-6 tracking-wider text-white 
        [text-shadow:0_0_10px_rgba(255,255,255,0.2)]">SERVER INFO</h1>
        
      <h2 className="text-2xl font-bold mb-2">! RC3-BASEMAPS</h2>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
        <span>CONQUEST LARGE</span>
        <span>-</span>
        <span>LANCANG DAM</span>
        <span>-</span>
        <span>CUSTOM</span>
        <span>-</span>
        <span>60 HZ</span>
      </div>

      <p className="text-sm text-gray-400 mb-8">
        Server protected by The_K-50 AntiCheat. Vip !Rules. Questions. Request. Appeal. Visit us: www.epg.gg | Discord https://discord.gg/5r8NK4d
      </p>

      {/* Action Buttons */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {['JOIN', 'SPECTATE', 'JOIN AS COMMANDER'].map(btn => (
          <button key={btn} 
            className="bg-[rgba(30,35,40,0.5)] border border-[rgba(255,255,255,0.1)] 
            hover:border-[#00ffff] hover:text-[#00ffff] transition-colors 
            py-3 px-4 text-center tracking-wider"
          >
            {btn}
          </button>
        ))}
        <div className="bg-[rgba(30,35,40,0.5)] border border-[rgba(255,255,255,0.1)] 
          flex items-center justify-center gap-2">
          <span className="text-[#00ffff]">★</span>
          <span>13672</span>
        </div>
      </div>

      {/* Server Stats */}
      <div className="grid grid-cols-3 mb-8">
        <div>
          <h3 className="text-gray-400 mb-2">PLAYERS</h3>
          <p className="text-xl">60/64</p>
        </div>
        <div>
          <h3 className="text-gray-400 mb-2">PING</h3>
          <p className="text-xl">104ms</p>
        </div>
        <div>
          <h3 className="text-gray-400 mb-2">TICKRATE</h3>
          <p className="text-xl">60 Hz</p>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-3 gap-16 mb-12">
        <div>
          <h3 className="text-gray-400 mb-4">SETTINGS</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">REGION</span>
              <span>EUROPE - DE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">PUNKBUSTER</span>
              <span>ON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">FAIRFIGHT</span>
              <span>ON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">PASSWORD</span>
              <span>OFF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">PRESET</span>
              <span>NORMAL</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 mb-4">ADVANCED</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">MINIMAP</span>
              <span>ON</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">ONLY SQUAD LEADER SPAWN</span>
              <span>OFF</span>
            </div>
            {/* Add other advanced settings */}
          </div>
        </div>

        <div>
          <h3 className="text-gray-400 mb-4">RULES</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">TICKETS</span>
              <span>400</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">VEHICLE SPAWN DELAY</span>
              <span>25</span>
            </div>
            {/* Add other rules */}
          </div>
        </div>
      </div>

      {/* Map Rotation */}
      <h3 className="text-gray-400 mb-4">MAP ROTATION</h3>
      <div className="grid grid-cols-4 gap-4">
        {[
          { name: 'DAWNBREAKER', mode: 'CONQUEST LARGE' },
          { name: 'PROPAGANDA', mode: 'CONQUEST LARGE' },
          { name: 'OPERATION LOCKER', mode: 'CONQUEST LARGE' },
          { name: 'LANCANG DAM', mode: 'CONQUEST LARGE' }
        ].map((map) => (
          <div key={map.name} className="relative group">
            <img 
              src={`/api/placeholder/300/200`}
              alt={map.name}
              className="w-full h-48 object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80">
              <p className="text-sm text-gray-300">{map.mode}</p>
              <p className="font-bold">{map.name}</p>
            </div>
            <div className="absolute inset-0 border border-transparent 
              group-hover:border-[#00ffff] transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}