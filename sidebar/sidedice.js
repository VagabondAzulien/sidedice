var buttons = document.querySelectorAll(".dr_die_button");
var dice = document.querySelectorAll(".dr_die");

function update_results(val, cnt) {
  var res = document.querySelector("#dr_results")
  var roll = Math.floor((Math.random() * Math.floor(val)) + 1)

  res.innerHTML = roll
}

buttons.forEach(function(b) {
  b.addEventListener('click', function() {
      update_results(b.value)
  })
})

dice.forEach(function(d) {
    d.children[0].addEventListener('click', function() {
        update_results(d.children[0].value, d.children[1].value)
    })
})
