let html = `<div><img src="image1.jpg" alt="Image 1"/><img src="image2.png" alt="Image 2"/></div>`;
let regex = /<img\s+[^>]*src="([^"]+)"/g;
let matches;
let imageSources = [];

while ((matches = regex.exec(html)) !== null) {
  imageSources.push(matches[1]);  // Match 1 is the captured src URL
}

console.log(imageSources);  // ["image1.jpg", "image2.png"]
