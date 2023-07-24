function loadScript(url) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = url;
      script.onload = () => resolve('Script loaded successfully');
      script.onerror = () => reject(new Error('Error loading script'));
      document.head.appendChild(script);
    });
  }

  const scriptUrl = 'https://en.wikipedia.org/wiki/URL';

  loadScript(scriptUrl)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.error(error.message);
    });