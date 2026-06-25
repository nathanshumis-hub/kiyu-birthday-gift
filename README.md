# 🎉 Kalkidan's Birthday Gift Website

A beautiful, interactive birthday gift website created with HTML, CSS, and JavaScript. This website showcases memorial videos, photos, love letters, and special music for Kalkidan's birthday celebration.

## Features

✨ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
🎵 **Background Music** - Auto-playing ambient music with play/pause controls
📸 **Photo Gallery** - Beautiful grid layout for your favorite memories
🎬 **Memorial Videos** - Embedded video players for special video messages
💌 **Love Letter** - A heartfelt message section with elegant styling
🎵 **Music Players** - Individual audio players for special songs
✨ **Animations** - Smooth transitions, confetti effects, and interactive elements
🎨 **Beautiful Aesthetics** - Modern gradient backgrounds and vibrant colors

## Project Structure

```
kiyu-birthday-gift/
├── index.html          # Main HTML file
├── styles.css          # Styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── assets/
    ├── photos/         # Photo files
    ├── videos/         # Video files
    └── music/          # Music files
```

## How to Use

### 1. Add Your Photos
- Create a folder called `assets/photos/` in your repository
- Add your photos with names: `photo1.jpg`, `photo2.jpg`, etc.
- Update the captions in `index.html`

### 2. Add Your Videos
- Create a folder called `assets/videos/` in your repository
- Add your video files: `video1.mp4`, `video2.mp4`, `video3.mp4`
- Videos will appear in the "Memorial Videos" section

### 3. Add Your Music
- Create a folder called `assets/music/` in your repository
- Add your background music: `background-music.mp3`
- Add special songs: `song1.mp3`, `song2.mp3`, `song3.mp3`

### 4. Customize the Love Letter
- Open `index.html`
- Find the Love Letter section
- Replace the text with your personal message

### 5. Deploy Your Website
You can deploy this website for free using:
- **GitHub Pages**: Go to Settings → Pages → Select `main` branch
- **Netlify**: Connect your GitHub repository
- **Vercel**: Connect your GitHub repository
- **Any web hosting service**: Upload the files

## File Organization

### Assets Structure
```
assets/
├── photos/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── photo3.jpg
│   ├── photo4.jpg
│   ├── photo5.jpg
│   └── photo6.jpg
├── videos/
│   ├── video1.mp4
│   ├── video2.mp4
│   └── video3.mp4
└── music/
    ├── background-music.mp3
    ├── song1.mp3
    ├── song2.mp3
    └── song3.mp3
```

## Customization Tips

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #FF1493;        /* Main pink color */
    --secondary-color: #FFB6C1;      /* Light pink */
    --accent-color: #FF69B4;         /* Hot pink */
    --dark-bg: #1a1a2e;              /* Dark background */
    --light-bg: #fdf5e6;             /* Light background */
}
```

### Add More Photos
Duplicate a `gallery-item` div in the HTML and update the image path.

### Edit Navigation
Modify the nav links in `index.html` for different sections.

### Adjust Font Sizes
Look for `font-size` properties in `styles.css` and modify the values.

## Browser Compatibility

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## Features Included

### 1. **Confetti Animation**
   - Confetti falls from the top on page load
   - More confetti appears on every click for celebration!

### 2. **Smooth Scrolling**
   - Click any navigation link to smoothly scroll to sections
   - Active link highlighting as you scroll

### 3. **Music Control**
   - Background music plays automatically (muted initially)
   - Toggle button to play/pause background music
   - Individual volume controls for each song

### 4. **Responsive Design**
   - Mobile-friendly layout
   - Touch-friendly buttons
   - Automatic grid adjustments

### 5. **Hover Effects**
   - Gallery items lift up on hover
   - Buttons scale and change colors
   - Videos and music players have smooth transitions

## Tips for Best Results

1. **Image Quality**: Use high-quality photos (at least 800x600px)
2. **Video Format**: Use MP4 format for best compatibility
3. **Audio Format**: Use MP3 format for best browser support
4. **File Sizes**: Compress images and videos to keep site fast
5. **Filenames**: Use simple names (photo1.jpg, video1.mp4, etc.)

## Troubleshooting

### Videos not playing?
- Make sure the video file format is `.mp4`
- Check that the file path is correct in HTML
- Try re-encoding the video to H.264 codec

### Photos not showing?
- Verify the image paths in `index.html`
- Check image file formats (jpg, png, webp)
- Ensure images are in the correct `assets/photos/` folder

### Music not playing?
- Confirm audio files are in `.mp3` format
- Check file paths in the HTML
- Browser might block autoplay - users can click the play button

### Styling looks different?
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check that all CSS files are linked correctly
- Ensure JavaScript is enabled in your browser

## License

This project is created for personal use. Feel free to modify and customize it!

## Made with ❤️

Created with love for Kalkidan's birthday. May this website bring joy and celebrate all the beautiful memories! 🎂💖

---

**Have fun and make it special!** 🎉🎈
