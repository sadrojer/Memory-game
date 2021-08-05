function colorchange(n, color) {
  $($("button")[n]).css("border-color", color)
  setTimeout(function() {
    $($("button")[n]).css("border-color", "grey")
  }, 200)
}

function newflick() {
  var n = Math.floor(Math.random() * 4)
  colorchange(n, "white")
  seq.push(n)
}

var seq = []
var seqcheck = []
var status = "ready"

$("body").click(function() {
  if (status == "ready") {
    status = "inUse"
    newflick()
    $("h1").text("After each blink repeat the full sequence")
  }
})
$("button").click(function(event) {
  if (status == "inUse") {
    n = event.target.id[3]
    colorchange(n, "pink")
    seqcheck.push(n)

    for (let i = 1; i <= seqcheck.length; i++) {
      if (seq[i-1] != seqcheck[i-1]) {
        $("h1").text("Game over")
        setTimeout(function() {
          location.reload()
        }, 2000)
      }
      else if ((seqcheck.length == seq.length) && (seq[seq.length-1] == seqcheck[seq.length-1])){
          $("h1").text("Your score: " + seq.length)
          setTimeout(function() {
            newflick()
          }, 1000)
          seqcheck = []
      }

  }
}

})
