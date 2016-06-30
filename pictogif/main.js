pictogif = {};
pictogif.defineRefs = function() {
  return {
    lines: $('.st3'),
    sunsetLines: pictogif.sortStrokes($('.st0')),
    letters: $('#letters'),
    backPlate: $('#back-plate'),
    scope: $('#scope0'),
    frames: $('.scope-frame')
  }
}


pictogif.drawStrokes = function(strokes, duration, easing) {
  var duration = duration || 1;
  var easing = easing || Elastic.easeOut;
  var promise = new Promise(function(resolve, reject) {
    TweenMax.staggerTo(strokes, duration, {
      strokeDashoffset: 0,
      ease: easing
    }, 0.03, function() {
      resolve();
    });
  });
  return promise;
};

pictogif.hoverStrokes = function(strokes, duration, style, cb) {
  var duration = duration || 1;
  var cb = cb || function() {};
  pictogif.refs.sortedStrokes = pictogif.refs.sortedStrokes || pictogif.sortStrokes(strokes);
  TweenMax.staggerTo(pictogif.refs.sortedStrokes, duration, {
    css: style,
    easing: Circ.easeIn
  }, 0.07, cb);
};

pictogif.sortStrokes = function(strokes) {
  console.log('sorting strokes');
  return strokes.sort(function(a, b) {
    return ($(a).offset().top < $(b).offset().top) ? -1 : 1;
  });
}

pictogif.showLetters = function() {
  console.log('show letters')
  var letters = pictogif.refs.letters;
  var plate = pictogif.refs.backPlate;
  var tl = new TimelineMax();
  tl.staggerTo([letters, plate], 2, {
    opacity: 1,
    x: 0,
    y: 0,
    ease: Elastic.easeOut
  }, 0.2);
  tl.play();
}

pictogif.flashLetters = function() {
  console.log('show letters')
  var letters = pictogif.refs.letters;
  var tl = new TimelineMax();
  // tl.to(letters, 1 {
  //   opacity: 0
  // })
}

pictogif.setUpStrokes = function(strokesSet) {
  var promise = new Promise(function(resolve, reject) {
    $(strokesSet).each(function(i, strokes) {
      $(strokes).each(function(j, stroke) {
        var length = stroke.getTotalLength();
        stroke.style.strokeDashoffset = length;
        stroke.style.strokeDasharray = length;
      });
    });
    resolve();
  })
  return promise;
}

pictogif.enhance = function(frames) {
  TweenMax.set(frames,  {scale: 1, transformOrigin: '50% 50%'});
  TweenMax.staggerFrom(frames, 2, { scale: 0, repeat: -1, ease: Linear.easeNone }, 0.4);
}

$(document).ready(function() {
  var refs = pictogif.refs = pictogif.defineRefs();
  pictogif.enhance(refs.frames);
  pictogif
    .setUpStrokes([refs.lines, refs.sunsetLines])
    .then(function() {
      return pictogif.drawStrokes(refs.sunsetLines, 3, Circ.easeInOut);
    })
    .then(function() {
      pictogif.showLetters();
      return pictogif.drawStrokes(refs.lines, 3, Circ.easeOut);
    })
    .then(function() {
      var count = 0;

      function eachLoop() {
        count++;
        var styles = {
          heads: {
            strokeWidth: '18px'
          },
          tails: {
            strokeWidth: '0px'
          }
        }
        var style = (count % 2 === 0) ? styles['heads'] : styles['tails'];
        pictogif.hoverStrokes(refs.sunsetLines, 1, style, eachLoop);
      }
      eachLoop();

    });
})
