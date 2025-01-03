const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create maps directory if it doesn't exist
const mapsDir = path.join(__dirname, '..', 'public', 'images', 'maps');
if (!fs.existsSync(mapsDir)) {
  fs.mkdirSync(mapsDir, { recursive: true });
}

// Generate map images
function generateMapImage(name, colorHue) {
  const width = 800;
  const height = 250;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, `hsl(${colorHue}, 50%, 20%)`);
  gradient.addColorStop(1, `hsl(${colorHue}, 50%, 10%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add some battlefield-style elements
  ctx.strokeStyle = `hsl(${colorHue}, 50%, 30%)`;
  ctx.lineWidth = 2;
  
  // Draw grid lines
  for (let i = 0; i < width; i += 50) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 100, height);
    ctx.stroke();
  }

  // Add some circles for visual interest
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50 + 20,
      0,
      Math.PI * 2
    );
    ctx.stroke();
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(mapsDir, `${name}.jpg`), buffer);
}

// Generate all map images
const maps = [
  { name: 'dawnbreaker', hue: 30 },
  { name: 'propaganda', hue: 200 },
  { name: 'operation-locker', hue: 45 },
  { name: 'lancang-dam', hue: 180 }
];

console.log('Generating map images...');
maps.forEach(map => {
  generateMapImage(map.name, map.hue);
  console.log(`Generated ${map.name}.jpg`);
});

console.log('All map images generated successfully!');
