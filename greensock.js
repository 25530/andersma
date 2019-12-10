var hart = document.getElementById("hart");
TweenMax.fromTo(hart,0.8,
	{
		visible:true,
		scale:1
	},
	{
		scale:1.2,
		repeat: -1,
		yoyo: true
});

TweenLite.fromTo('#buiten ', 4, {drawSVG: "0%"}, {drawSVG: "100%"});


TweenMax.from("#maVierkant", 1, {attr:{x:950}, yoyo:true, repeat:-1, ease:Linear.easeNone});



function animate() {
  TweenMax.to(".st4", 1, {fill:getRandomColor(), stroke:getRandomColor(), delay:1, onComplete:animate});
}
animate();

function getRandomColor() {
  return "rgb(" + random(0,255) + "," + random(0,255) + "," + random(0,255) +")";
}

function random(min, max) {
  return min + Math.floor( Math.random() * (max - min));
}


$("#andersMag").on("mouseenter", function() {
  TweenMax.to(this, 0.4, {scale:1.5, ease:Bounce.easeOut})
  TweenMax.to(this, 0.2, {scale:1, delay:0.4})
})
