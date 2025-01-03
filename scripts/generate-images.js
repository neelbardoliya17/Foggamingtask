const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate background image
function generateBackground() {
  const canvas = createCanvas(1920, 1080);
  const ctx = canvas.getContext('2d');

  // Create a dark military gradient background
  const gradient = ctx.createLinearGradient(0, 0, 0, 1080);
  gradient.addColorStop(0, '#1a2028');
  gradient.addColorStop(1, '#2d3436');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1920, 1080);

  // Add some battlefield-style elements
  ctx.strokeStyle = '#3d4852';
  ctx.lineWidth = 2;
  
  // Draw grid lines
  for (let i = 0; i < 1920; i += 100) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i + 200, 1080);
    ctx.stroke();
  }

  // Add some circles for visual interest
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * 1920,
      Math.random() * 1080,
      Math.random() * 200 + 50,
      0,
      Math.PI * 2
    );
    ctx.stroke();
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, 'battlefield-bg.jpg'), buffer);
}

// Generate soldier avatars
function generateSoldierAvatar(index) {
  const canvas = createCanvas(128, 128);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, `hsl(${index * 40}, 70%, 20%)`);
  gradient.addColorStop(1, `hsl(${index * 40}, 70%, 10%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 128, 128);

  // Add military-style pattern
  ctx.strokeStyle = `hsl(${index * 40}, 70%, 30%)`;
  ctx.lineWidth = 2;
  
  // Draw concentric circles
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(64, 64, 15 + i * 10, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Add rank insignia
  ctx.fillStyle = '#ddd';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(String(index), 64, 64);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, `soldier${index}.jpg`), buffer);
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

  // Add battlefield-style elements
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
  fs.writeFileSync(path.join(imagesDir, 'maps', `${name}.jpg`), buffer);
}

// Generate all images
console.log('Generating background image...');
generateBackground();

console.log('Generating soldier avatars...');
for (let i = 1; i <= 5; i++) {
  generateSoldierAvatar(i);
}

console.log('Generating map images...');
const maps = [
  { name: 'dawnbreaker', hue: 30 },
  { name: 'propaganda', hue: 200 },
  { name: 'operation-locker', hue: 45 },
  { name: 'lancang-dam', hue: 180 }
];

maps.forEach(map => {
  generateMapImage(map.name, map.hue);
  console.log(`Generated ${map.name}.jpg`);
});

console.log('All images generated successfully!');
