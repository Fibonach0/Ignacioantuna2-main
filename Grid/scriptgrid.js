function createCountdown(container) {
    const ringer = {
      countdown_to: container.getAttribute('data-date'),
      label: container.getAttribute('data-label'),
      rings: {
        'DAYS': { s: 86400000, max: 365 },
        'HOURS': { s: 3600000, max: 24 },
        'MINUTES': { s: 60000, max: 60 },
        'SECONDS': { s: 1000, max: 60 },
      },
      r_size: 100,
      r_thickness: 2,
      init: function () {
        this.cvs = document.createElement('canvas');
        container.appendChild(this.cvs);
        this.ctx = this.cvs.getContext('2d');
        this.countdown_to_time = new Date(this.countdown_to).getTime();
        this.go();
      },
      go: function () {
        const now = new Date().getTime();
        let remaining = this.countdown_to_time - now;
  
        if (remaining < 0) remaining = 0;
  
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        Object.keys(this.rings).forEach((key, i) => {
          this.drawUnit(key, this.rings[key], remaining, i);
          remaining %= this.rings[key].s;
        });
  
        setTimeout(() => this.go(), 1000);
      },
      drawUnit: function (label, ring, remaining, idx) {
        const value = Math.floor(remaining / ring.s);
        const x = 150;
        const y = 150;
        const radius = this.r_size / 2;
  
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.strokeStyle = "rgba(128,128,128,0.2)";
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.stroke();
  
        const endAngle = (2 * Math.PI * value) / ring.max;
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, -Math.PI / 2, endAngle - Math.PI / 2);
        this.ctx.strokeStyle = "rgba(253, 128, 1, 0.9)";
        this.ctx.lineWidth = this.r_thickness;
        this.ctx.stroke();
  
        this.ctx.font = '16px Arial';
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText(`${label}: ${value}`, x, y + 50);
      },
    };
  
    ringer.init();
  }
  
  document.querySelectorAll('.countdown-container').forEach(createCountdown);
  