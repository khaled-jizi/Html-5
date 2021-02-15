
var canvas = document.getElementById('canvas2'),
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 5.0;
    ctx.strokeStyle = "#666";
    
    bg = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
    bg.addColorStop(0., "yellow");
    bg.addColorStop(.5, "green");
    bg.addColorStop(1, "red");
    ctx.fillStyle = bg;


    ctx.arc(100, 
            100, 
            100, 
            0, 
            Math.PI *2, 
            true 
    );    
    ctx.fill();
    


(function() {
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        particles = [];
    
    function generateParticle() {

    if ( particles.length >= 200 ) return; 

    var gray = Math.round( Math.random() * 255);
    particles.push({
        x: Math.random() * canvas.width,
        y: 0,
        radius: Math.random() * 15,
        speed: Math.random() * 4,
        color: 'rgb(' + [gray, gray, gray].join(',') + ')'
    });
    } 
    
    function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for ( var i = 0; i < particles.length; i++) {
        var p = particles[i];
        
        ctx.beginPath();
    
        if ( p.y >= canvas.height ) p.y = 0;
        if ( p.x >= canvas.width ) p.x = 0;
        
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2); 
        ctx.fillStyle = p.color;
        
        ctx.closePath();
        ctx.fill();
    }
    }
    
    function updatePosition() {

    for ( var i = 0; i < particles.length; i++ ) {
        particles[i].y += particles[i].speed;
        particles[i].x += .2;
    
    }
    }
    
    setInterval(function() {
    generateParticle();
    draw();
    updatePosition();
    }, 40);  
})();
    

(function() {
    var canvas = document.getElementById('canvas1'),
        context = canvas.getContext('2d'),
        bg;
        
    context.strokeStyle = "#666";
    
    bg = context.createLinearGradient(200, 150, 200, 300);
    bg.addColorStop(0, "yellow");
    bg.addColorStop(.5, "green");
    bg.addColorStop(1, "red");
    context.fillStyle = bg;
    

    
    context.lineWidth = 5.0;
    
    context.beginPath();
    context.moveTo(100,300);
    context.lineTo(300,300);
    context.lineTo(200,150);
    context.closePath();
    
    context.fill();
    context.stroke();
})();


