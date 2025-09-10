let b = 1000;

function ui() {
  document.getElementById('bal').textContent = `$${b}`;
  document.getElementById('amt').value = '';
  document.getElementById('msg').textContent = '';
}

function dep() {
  let a = Number(document.getElementById('amt').value);
  if (a > 0) {
    b += a;
    ui();
  }
}

function wd() {
  let a = Number(document.getElementById('amt').value);
  if (a > 0 && a <= b) {
    b -= a;
    ui();
  } else {
    document.getElementById('msg').textContent = 'Invalid withdrawal amount';
  }
}
