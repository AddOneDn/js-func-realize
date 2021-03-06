let input = document.getElementById('input');
let content = document.getElementById('content');
let data = {};

Object.defineProperty(data, "value", {
  configurable: true,
  get: () => input.value,
  set: (value) => {
    input.value = value;
  }
});

input.onkeyup = () => {
  data.value = input.value;
  content.innerHTML = data.value;
}
