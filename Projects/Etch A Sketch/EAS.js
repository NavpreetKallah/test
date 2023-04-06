const container = document.querySelector('#container');
const row = document.createElement("row");
let multiplyer = 0;
let important = 0;
let size = 16;
function update() {
for (let i = 0;i <= size;i++) {
  var div = document.createElement('div');
  div.textContent = ""
  number = i.toString()
  temp = "row".concat(number)
  div.classList.add('row');
  div.setAttribute('id', temp);
  container.appendChild(div);
  for (let y = 0; y <= size; y++) {
    var panel = document.createElement('div');
    x = y + (size * multiplyer) + important
    number = x.toString()
    temp = "panel".concat(number)
    panel.classList.add('panel');
    panel.setAttribute('id', temp);
    div.appendChild(panel);
  }
  important = 1;
  multiplyer = multiplyer + 1
}
width = screen.width
panel_size = Math.round((((width*0.66) / size)/4))
panel_size = panel_size.toString()
panel_size = panel_size.concat("px")
const panel_list = document.querySelectorAll("div.panel");
panel_list.forEach((temp) => {
temp.style.padding = panel_size;
  })
}
update()
function detect_hover() {
panels = document.querySelectorAll('div.panel');
panels.forEach((panel) => {

  panel.addEventListener("mouseenter", () => {
    panel.classList.add("black");
  });
});
}
detect_hover()

document.getElementById("clear").addEventListener("click",function() {
panels.forEach((panel) => {
    panel.classList.remove("black");
});
})
document.getElementById("change").addEventListener("click", function () {
  size = (prompt("Please enter how many panels wide you would like the grid to be between 1-100")-1)
  if (100 >=size >=1) {
  document.getElementById("container").innerHTML = "";
  update()
  detect_hover()
  }
  else {
    size = 16;
  }
});