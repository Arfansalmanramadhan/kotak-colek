const kotak = document.querySelectorAll(`.inbox input[type="checkbox"]`);

function handleCheck(e) {
  let lastChecked;

  let inBetween = false;
  if (e.shiftKey && this.checked) {
    kotak.forEach(function (kotak) {
      console.log(kotak);
      if (kotak === this || kotak === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        kotak.checked = true;
      }
    });
  }
  lastChecked = this;
}
kotak.forEach((kotaak) => kotaak.addEventListener(`click`, handleCheck));
