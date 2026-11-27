document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

(async () => {
  const version = document.getElementById('version');
  const button = document.getElementById('downloadButton');
  const status = document.getElementById('status');
  if (!version || !button || !status) return;

  const releases = 'https://github.com/jericlangco/Minikaraoke-Update/releases/latest';
  try {
    const response = await fetch('https://api.github.com/repos/jericlangco/Minikaraoke-Update/releases/latest', {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!response.ok) throw new Error('No published release found');
    const release = await response.json();
    const releaseName = release.tag_name || release.name || 'Latest';
    version.textContent = releaseName;
    const apk = (release.assets || []).find(asset => asset.name && asset.name.toLowerCase().endsWith('.apk'));
    if (apk && apk.browser_download_url) {
      button.href = apk.browser_download_url;
      button.innerHTML = '⇩ <span>Download ' + releaseName + ' APK</span>';
      status.textContent = 'A published APK asset was found.';
    } else {
      button.href = releases;
      status.textContent = 'Release found, but no APK asset was detected. Check the release Assets.';
    }
  } catch (error) {
    version.textContent = 'See GitHub Releases';
    button.href = releases;
    status.textContent = 'Automatic release check unavailable. Open GitHub Releases to view available downloads.';
  }
})();
