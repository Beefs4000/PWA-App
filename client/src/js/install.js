const butInstall = document.getElementById('buttonInstall');

// This is for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
       }
     
       // Show prompt
       promptEvent.prompt();
       
       window.deferredPrompt = null;
       
       butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
     // Clear prompt
    window.deferredPrompt = null;
});
