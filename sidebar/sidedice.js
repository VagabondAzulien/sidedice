var dice = document.querySelectorAll(".dr_die");

function update_results(cnt, val, mod, ech) {
  let res = document.querySelector("#dr_results")
  let roll = 0

  for (let i = 0; i < cnt; i++) {
    roll += Math.floor((Math.random() * Math.floor(val)) + 1)
    if (ech) { roll += +mod }
  }

  if (ech) {
    res.innerHTML = roll
  } else {
    res.innerHTML = roll + +mod
  }
}

dice.forEach(function(d) {
    d.children[1].addEventListener('click', function() {
        update_results(
          d.children[0].value, 
          d.children[1].value,
          d.children[2].value,
          d.children[3].checked
        )
    })
})
