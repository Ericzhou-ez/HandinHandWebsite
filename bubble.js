document.addEventListener('DOMContentLoaded', () => {
    const bubblesContainer = document.querySelector('.gradients-container');
    const colors = [
        'rgba(2, 35, 30, 0.8)',       // Very dark blue
        'rgba(255, 119, 139, 0.8)',   // Light red
        'rgba(12, 12, 132, 0.8)',     // Brightened dark blue
        'rgba(0, 24, 72, 0.8)',       // Brightened dark blue
        'rgba(18, 18, 180, 0.8)',     // Brightened dark blue
        'rgba(30, 69, 186, 0.8)',     // Blue
        'rgba(235, 12, 0, 0.8)',      // Bright red
        'rgba(220, 15, 15, 0.8)',     // Dark red
        'rgba(235, 12, 0, 0.7)',      // Bright red (slightly more transparent)
        'rgba(24, 12, 12, 0.8)',      // Brightened very dark red
        'rgba(48, 18, 18, 0.8)',      // Brightened dark red
        'rgba(30, 80, 160, 0.8)',     // Medium blue
        'rgba(220, 15, 15, 0.8)',     // Red
        'rgba(255, 64, 64, 0.8)',     // Light red
        'rgba(240, 50, 78, 0.8)',     // Dark red
        'rgba(30, 52, 0, 0.1)'        // Very dark red
    ];
  
    function createBubble(className, color) {
        const bubble = document.createElement('div');
        bubble.classList.add(className);
        bubble.style.background = `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0) 70%) no-repeat`;
        bubblesContainer.appendChild(bubble);
    }
  
    colors.forEach((color, index) => {
        createBubble(`g${index + 1}`, color);
    });
  
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;
  
    function move() {
        curX += (tgX - curX) / 4;
        curY += (tgY - curY) / 4;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    }
  
    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });
  
    move();
});
