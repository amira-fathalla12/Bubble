const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('colorPicker');
    const button = document.getElementById('generateCircles');

    function generateCircles() {
      const numberOfCircles = Math.floor(Math.random() * 10) + 5; 
      const color = colorPicker.value; 

      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < numberOfCircles; i++) {
        const x = Math.random() * canvas.width; 
        const y = Math.random() * canvas.height; 
        const radius = Math.random() * 50 + 10;  

     
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
    }

    button.addEventListener('click', generateCircles);