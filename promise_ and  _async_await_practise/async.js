function loadScript(src) {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
  });
}
async function loadScriptAsync() {
  const scriptUrl = 'https://www.javascripttutorial.net/javascript-data-types/';
  try {
      await loadScript(scriptUrl);
      document.getElementById('room').innerText = 'Script loaded successfully!';
  } catch (error) {
      document.getElementById('room').innerText = 'Error loading the script!';
  }
}
loadScriptAsync();