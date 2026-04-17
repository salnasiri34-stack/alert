self.addEventListener('push', function(event) {
    const data = event.data.json();
    event.waitUntil(
        self.registration.showNotification(data.title, {
            body: data.message,
            icon: 'https://img.icons8.com/emoji/96/alert-light.png'
        })
    );
});
