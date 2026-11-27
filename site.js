document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

// The homepage intentionally links to the user's selected GitHub release.
// This keeps the destination on the release page rather than changing it to a direct APK asset.
