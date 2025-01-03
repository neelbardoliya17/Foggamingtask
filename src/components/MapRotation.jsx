import React from 'react';

const MapRotation = () => {
  const maps = [
    {
      id: 1,
      name: 'DAWNBREAKER',
      mode: 'CONQUEST LARGE',
      image: `${process.env.PUBLIC_URL}/images/maps/dawnbreaker.jpg`
    },
    {
      id: 2,
      name: 'PROPAGANDA',
      mode: 'CONQUEST LARGE',
      image: `${process.env.PUBLIC_URL}/images/maps/propaganda.jpg`
    },
    {
      id: 3,
      name: 'OPERATION LOCKER',
      mode: 'CONQUEST LARGE',
      image: `${process.env.PUBLIC_URL}/images/maps/operation-locker.jpg`
    },
    {
      id: 4,
      name: 'LANCANG DAM',
      mode: 'CONQUEST LARGE',
      image: `${process.env.PUBLIC_URL}/images/maps/lancang-dam.jpg`
    }
  ];

  return (
    <div className="bg-gray-900/50 p-8 backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">MAP ROTATION</h2>
      <div className="grid grid-cols-4 gap-4">
        {maps.map((map) => (
          <div key={map.id} className="relative group cursor-pointer">
            <div className="aspect-[16/5] overflow-hidden">
              <img
                src={map.image}
                alt={map.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-sm font-medium text-gray-300">{map.mode}</div>
              <div className="text-lg font-bold text-white">{map.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapRotation;
