# Mini Karaoke Website 2.0

A responsive GitHub Pages website for the Mini Karaoke Android project.

## Files
- `index.html` — homepage and latest GitHub release APK lookup
- `about.html` — developer profile
- `changelog.html` — version history
- `features.html` — project overview
- `contact.html` — project support link
- `style.css` — shared responsive dark neon theme
- `site.js` — shared footer year script
- `author.jpg` — developer profile photo

## Publish
Upload the contents of this folder to the root of the `Minikaraoke-Website` GitHub repository. Keep GitHub Pages configured to publish from the repository's root branch/folder.

The homepage checks the latest release from `jericlangco/Minikaraoke-Update` using GitHub's public API. If no APK asset is found or the API is unavailable, the download link opens the releases page.
