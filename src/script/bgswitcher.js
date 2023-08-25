const backgroundImages = [
    'asset/bg1.png',
    'asset/bg2.png',
    'asset/bg3.png',
    'asset/bg4.png',
    'asset/bg5.png',
    'asset/bg6.png',
    'asset/bg7.png',
    'asset/bg8.png',
    'asset/bg9.png',

  ];
const backgroundInfos =[
  'Shot by Glowingstone124 at QO skyscraper',
  'Shot by Glowingstone124 at Norzpasham',
  'Shot by Glowingstone124 at lao_w_ang garden',
  'Shot by Glowingstone124 at Industrial Area Interchange',
  'Shoy by Glowingstone124 at Aminos Mountain',
  'Shot by Glowingstone124 at Norzpasham & Sea Searcher',
  'Shot by Glowingstone124 at Library',
  'Shot by Glowingstone124 at development zone #1',
  'Shot by Glowingstone124 at G3 Exit'
];
  document.getElementById('backgroundBody').style.backgroundImage = `url(asset/bg1.png)`;
  var currentImageIndex = 0;
  function rotateBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    const imageUrl = backgroundImages[currentImageIndex];
    const imageInfo = backgroundInfos[currentImageIndex];
    document.getElementById('backgroundBody').style.backgroundImage = `url(${imageUrl})`;
    document.getElementById('backgroundInfo').textContent = imageInfo;
  }
  // Rotate background image every 5 seconds
  setInterval(rotateBackgroundImage, 10000);