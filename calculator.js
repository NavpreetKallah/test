a = "";
b = "";
c = "";
symbol = "";
document.getElementById('1').onclick = function () {
  a = a + 1
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('2').onclick = function () {
  a = a + 2
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('3').onclick = function () {
  a = a + 3
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('4').onclick = function () {
  a = a + 4
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('5').onclick = function () {
  a = a + 5
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('6').onclick = function () {
  a = a + 6
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('7').onclick = function () {
  a = a + 7
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('8').onclick = function () {
  a = a + 8
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('9').onclick = function () {
  a = a + 9
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('0').onclick = function () {
  a = a + 0
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('+').onclick = function () {
  symbol = "+"
  console.log(symbol)
  document.getElementById("symbol").innerHTML = "+"
  if (c.length > 0) {
    b = a;
  } else {
    c = a;
  }
  a = "";

  if (c.length > 0 && b.length > 0) {
    b = parseInt(b)
    c = parseInt(c)
  }
}
document.getElementById('-').onclick = function () {
  symbol = "-"
  console.log(symbol)
  document.getElementById("symbol").innerHTML = "-"
  if (c.length > 0) {
    b = a;
  } else {
    c = a;
  }
  a = "";

  if (c.length > 0 && b.length > 0) {
    b = parseInt(b)
    c = parseInt(c)
  }
}
document.getElementById("*").onclick = function () {
  symbol = "*"
  console.log(symbol)
  document.getElementById("symbol").innerHTML = "*"
  if (c.length > 0) {
    b = a;
  } else {
    c = a;
  }
  a = "";

  if (c.length > 0 && b.length > 0) {
    b = parseInt(b)
    c = parseInt(c)
  }
}
document.getElementById('÷').onclick = function () {
  symbol = "÷"
  console.log(symbol)
  document.getElementById("symbol").innerHTML = "÷"
  if (c.length > 0) {
    b = a;
  } else {
    c = a;
  }
  a = "";

  if (c.length > 0 && b.length > 0) {
    b = parseInt(b)
    c = parseInt(c)
  }
}
document.getElementById('del').onclick = function () {
  console.log(a)
  a = a.toString()
  a = a.substring(0, a.length - 1);
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('clear').onclick = function () {
  console.log(a)
  a = a.toString()
  a = ""
  b = ""
  c = ""
  console.log(a)
  document.getElementById("display").innerHTML = a
}
document.getElementById('=').onclick = function () {
  if (c.length > 0) {
    b = a;
  } else {
    c = a;
  }
  a = "";
  
  if (c.length > 0 && b.length > 0) {
    b = parseInt(b)
    c = parseInt(c)
    if (symbol == "+") {
      a = b + c
    }
    else if (symbol == "-") {
      a = c - b
    }
    else if (symbol == "÷") {
      a = c / b
    }
    else if (symbol == "*") {
      a = b * c
    };
    a = a.toString()
    b = "";
    c = "";
    symbol = "";
    document.getElementById("symbol").innerHTML = ""
  }
  document.getElementById("display").innerHTML = a
}