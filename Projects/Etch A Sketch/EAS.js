const container = document.querySelector('#container');
const row = document.createElement("row");
let multiplyer = 0;
let important = 0;
let size = 16;
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
//
const panels = document.querySelectorAll('div.panel');
panels.forEach((panel) => {

  panel.addEventListener("mouseenter", () => {
    panel.classList.add("black");
  });
});
let width = screen.width;
panel_size = Math.round(((width/size)-10)/4)
panel_size = panel_size.toString()
panel_size = panel_size.concat("px")
const panel_list = document.querySelectorAll("div.panel");
panel_list.forEach((panel) => {
  panel.style.padding = panel_size;
})

document.getElementById("clear").addEventListener("click",function() {
panels.forEach((panel) => {
    panel.classList.remove("black");
});
})