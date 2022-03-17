// eslint-disable-next-line no-undef
window.onload = function () {
  let regexp = /\D/gi;

  // eslint-disable-next-line no-undef
  let input2 = document.getElementById("dropdown1");

  input2.addEventListener("keydown", (event) => {
    if (input2.value.length === 0) {
      if (!(event.key === "0")) {
        event.preventDefault();
      }
    }
    if (input2.value.length === 0 || input2.value.length === 1) {
      // eslint-disable-next-line no-undef
      document.getElementById("myDropdown1").style.visibility = "visible";
      if (!(event.key === "0")) {
        event.preventDefault();
      }
    }
    // eslint-disable-next-line no-undef
    let lists = Array.from(document.querySelectorAll("li"));

    // eslint-disable-next-line no-restricted-syntax
    for (let li of lists) {
      // eslint-disable-next-line no-loop-func
      li.onclick = function () {
        input2.value += this.innerHTML;
        // eslint-disable-next-line no-undef
        let dr = document.getElementById("myDropdown1");
        dr.style.visibility = "hidden";
        input2.focus();
      };
    }

    if (input2.value.length > 0) {
      if (regexp.test(input2.value)) {
        event.preventDefault();
        input2.value = "";
      }
    }
  });
};
