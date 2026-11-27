document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

(async () => {
  const version = document.getElementById('version');
  const button = document.getElementById('downloadButton');
  const status = document.getElementById('status');
  const fallbackUrl = 'https://github.com/jericlangco/Minikaraoke-Update/releases/download/1.14.4/Mini_Karaoke_1.14.4.apk';

  try {
    const response = await fetch(
      'https://api.github.com/repos/jericlangco/Minikaraoke-Update/releases/latest',
      { headers: { Accept: 'application/vnd.github+json' }, cache: 'no-store' }
    );
    if (!response.ok) throw new Error('Latest release lookup failed');

    const release = await response.json();
    const apk = (release.assets || []).find(asset =>
      asset.name && asset.name.toLowerCase().endsWith('.apk')
    );
    if (!apk || !apk.browser_download_url) throw new Error('No APK asset found');

    version.textContent = release.tag_name || release.name || 'Latest';
    button.href = apk.browser_download_url;
    button.textContent = '↓ Download APK';
    status.textContent = 'Latest APK found. Tap the button to download it directly.';
  } catch (error) {
    // Keep the known v1.14.4 direct asset link working if the API is unavailable.
    button.href = fallbackUrl;
    button.textContent = '↓ Download APK';
    status.textContent = 'Direct download link ready: Mini Karaoke v1.14.4.';
  }
})();
