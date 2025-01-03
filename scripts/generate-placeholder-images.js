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

  // Add some subtle pattern
  ctx.strokeStyle = '#3d4852';
  for (let i = 0; i < 50; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * 1920, Math.random() * 1080);
    ctx.lineTo(Math.random() * 1920, Math.random() * 1080);
    ctx.stroke();
  }

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, 'battlefield-bg.jpg'), buffer);
}

// Generate soldier avatars
function generateSoldierAvatar(index) {
  const canvas = createCanvas(96, 96);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createRadialGradient(48, 48, 0, 48, 48, 48);
  gradient.addColorStop(0, `hsl(${index * 40}, 70%, 20%)`);
  gradient.addColorStop(1, `hsl(${index * 40}, 70%, 10%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 96, 96);

  // Add military-style pattern
  ctx.strokeStyle = `hsl(${index * 40}, 70%, 30%)`;
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(48, 48, 10 + i * 8, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Add rank insignia
  ctx.fillStyle = '#ddd';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(String(index), 48, 48);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, `soldier${index}.jpg`), buffer);
}

// Generate all images
console.log('Generating background image...');
generateBackground();

console.log('Generating soldier avatars...');
for (let i = 1; i <= 5; i++) {
  generateSoldierAvatar(i);
}

console.log('All images generated successfully!');
