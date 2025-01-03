import React from 'react';
import { FaStar } from 'react-icons/fa';
import MapRotation from './MapRotation';

const ServerBrowser = () => {
  const serverInfo = {
    name: "! RC3-BASEMAPS",
    mode: "CONQUEST LARGE",
    map: "LANCANG DAM",
    type: "CUSTOM",
    hz: "60 HZ",
    players: "60/64",
    ping: "104ms",
    tickrate: "60 Hz",
    score: "13672"
  };

  const playerAvatars = [
    { id: 1, image: `${process.env.PUBLIC_URL}/images/soldier1.jpg`, rank: 'Colonel', level: 100 },
    { id: 2, image: `${process.env.PUBLIC_URL}/images/soldier2.jpg`, rank: 'General', level: 140 },
    { id: 3, image: `${process.env.PUBLIC_URL}/images/soldier3.jpg`, rank: 'Captain', level: 80 },
    { id: 4, image: `${process.env.PUBLIC_URL}/images/soldier4.jpg`, rank: 'Lieutenant', level: 60 },
    { id: 5, image: `${process.env.PUBLIC_URL}/images/soldier5.jpg`, rank: 'Sergeant', level: 45 },
  ];

  const settings = [
    { label: "REGION", value: "EUROPE - DE" },
    { label: "PUNKBASTER", value: "ON" },
    { label: "FAIRFIGHT", value: "ON" },
    { label: "PASSWORD", value: "OFF" },
    { label: "PRESET", value: "NORMAL" }
  ];

  const advanced = [
    { label: "MINIMAP", value: "ON" },
    { label: "ONLY SQUAD LEADER SPAWN", value: "OFF" },
    { label: "VEHICLES", value: "ON" },
    { label: "TEAM BALANCE", value: "ON" },
    { label: "MINIMAP SPOTTING", value: "ON" },
    { label: "HUD", value: "ON" },
    { label: "3P VEHICLE CAM", value: "ON" },
    { label: "REGENERATIVE HEALTH", value: "ON" },
    { label: "KILL CAM", value: "ON" },
    { label: "FRIENDLY FIRE", value: "OFF" },
    { label: "3D SPOTTING", value: "ON" },
    { label: "ENEMY NAME TAGS", value: "ON" }
  ];

  const rules = [
    { label: "TICKETS", value: "400" },
    { label: "VEHICLE SPAWN DELAY", value: "25" },
    { label: "BULLET DAMAGE", value: "100" },
    { label: "KICK AFTER TEAM KILLS", value: "5" },
    { label: "PLAYER HEALTH", value: "100" },
    { label: "PLAYER RESPAWN TIME", value: "100" },
    { label: "KICK AFTER IDLE", value: "300" },
    { label: "BAN AFTER KICKS", value: "3" }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/battlefield-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="min-h-screen bg-black bg-opacity-75 text-gray-100 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Navigation */}
          <nav className="text-sm mb-6">
            <span className="text-gray-400">MULTIPLAYER / SERVER BROWSER /</span>
            <h1 className="text-3xl font-bold mt-2">SERVER INFO</h1>
          </nav>

          {/* Server Header */}
          <div className="bg-gray-800/50 p-6 rounded-lg mb-6 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold text-yellow-500">{serverInfo.name}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm">🇺🇸</span>
                  <span>{serverInfo.mode}</span>
                  <span>-</span>
                  <span>{serverInfo.map}</span>
                  <span>-</span>
                  <span>{serverInfo.type}</span>
                  <span>-</span>
                  <span>{serverInfo.hz}</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord
                  https://discord.gg/3r5NKdd
                </div>
              </div>
              <div className="flex gap-4">
                {playerAvatars.map((avatar) => (
                  <div key={avatar.id} className="relative group">
                    <img 
                      src={avatar.image} 
                      alt={`Player ${avatar.id}`} 
                      className="w-12 h-12 rounded-full border-2 border-gray-700 hover:border-yellow-500 transition-all duration-200"
                    />
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {avatar.rank} - Level {avatar.level}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button className="btn-game bg-yellow-600 hover:bg-yellow-500">
                JOIN
              </button>
              <button className="btn-game">
                SPECTATE
              </button>
              <button className="btn-game bg-blue-600 hover:bg-blue-500">
                JOIN AS COMMANDER
              </button>
              <div className="flex items-center gap-2 ml-auto">
                <FaStar className="text-yellow-500" />
                <span>{serverInfo.score}</span>
              </div>
            </div>
          </div>

          {/* Server Stats */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="server-stat backdrop-blur-sm">
              <div className="stat-label">PLAYERS</div>
              <div className="stat-value">{serverInfo.players}</div>
            </div>
            <div className="server-stat backdrop-blur-sm">
              <div className="stat-label">PING</div>
              <div className="stat-value">{serverInfo.ping}</div>
            </div>
            <div className="server-stat backdrop-blur-sm">
              <div className="stat-label">TICKRATE</div>
              <div className="stat-value">{serverInfo.tickrate}</div>
            </div>
          </div>

          {/* Settings Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Settings */}
            <div className="bg-gray-800/50 p-4 rounded backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4">SETTINGS</h3>
              <div className="space-y-2">
                {settings.map((setting, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{setting.label}</span>
                    <span>{setting.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced */}
            <div className="bg-gray-800/50 p-4 rounded backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4">ADVANCED</h3>
              <div className="space-y-2">
                {advanced.map((setting, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{setting.label}</span>
                    <span>{setting.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-gray-800/50 p-4 rounded backdrop-blur-sm">
              <h3 className="text-lg font-bold mb-4">RULES</h3>
              <div className="space-y-2">
                {rules.map((rule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{rule.label}</span>
                    <span>{rule.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapRotation />
    </div>
  );
};

export default ServerBrowser;
