(function(w, v) {
  w.picto = {
    nodes: {},
    init: function() {
      this.grabNodes();
      this.reveal();
      this.loop(200);
    },
    grabNodes: function() {
      this.nodes.bg = document.getElementById('bg');
      this.nodes.bgCircles = this.nodes.bg.querySelectorAll('circle');
      this.nodes.logo = document.getElementById('app-icon');
      this.nodes.appStoreBadge = document.querySelector('.app-store');
    },
    reveal: function() {
      var icon = this.nodes.logo;
      var appStoreBadge = this.nodes.appStoreBadge;
      v({
        e: icon,
        p: {opacity: 1, translateY: '40px'},
        o: {delay: 500, duration: 1800, easing: 'easeInOutQuad'}
      });
      v({
        e: appStoreBadge,
        p: {opacity: 1, translateY: '40px'},
        o: {delay: 1500, duration: 1800, easing: 'easeInOutQuad'}
      });
    },
    loop: function(cap) {
      var step = 0;
      this.interval = setInterval(function() {
        if (step >= cap) {
          clearInterval(this.interval);
          return;
        }
        this.eachTick();
        step++;
      }.bind(this), 200);
      this.eachTick();
    },
    eachTick: function() {
      var circle = this.randomCircle();
      this.blinkCircle(circle);
    },
    randomCircle: function() {
      var circleArray = this.nodes.bgCircles;
      return circleArray[Math.floor(Math.random() * circleArray.length)]
    },
    blinkCircle: function(circle) {
      if (circle.classList.contains('velocity-animating')) return;
      v({
        e: circle,
        p: {scale: 0},
        o: {duration: 5000, complete: function(el) {
          v({e: el, p: {scale: 1}, o: {duration: 1000}});
        }}
      });
    }
  };
})(window, Velocity);

document.addEventListener('DOMContentLoaded', function() {
  picto.init();
})
