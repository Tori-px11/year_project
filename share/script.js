document.addEventListener('DOMContentLoaded', function() {
    function downloadCombinedImage(imageUrl, qrElement, imageName) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        const qrImg = new Image();
        img.crossOrigin = 'anonymous';
        qrImg.crossOrigin = 'anonymous';

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const qrWidth = 100;
            const qrHeight = 100;
            const qrX = 20;
            const qrY = canvas.height - qrHeight - 20;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(qrX, qrY, qrWidth, qrHeight);
            qrImg.onload = function() {
                ctx.drawImage(qrImg, qrX + 5, qrY + 5, 90, 90);
                canvas.toBlob(function(blob) {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = imageName + '.jpg';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                }, 'image/jpeg', 0.9);
            };
            qrImg.src = qrElement.querySelector('.qr-image').src;
        };
        img.src = imageUrl;
    }

    document.querySelectorAll('.art-card').forEach(card => {
        const imageName = card.getAttribute('data-image');
        const imageUrl = card.querySelector('.art-image').src;
        const qrElement = card.querySelector('.qr-container');
        card.querySelector('.download-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            downloadCombinedImage(imageUrl, qrElement, imageName);
        });
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('download-btn')) {
                downloadCombinedImage(imageUrl, qrElement, imageName);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.back-button').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});