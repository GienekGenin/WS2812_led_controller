Element.prototype.remove = function () {
  this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
};

let interval = setInterval(function () {
  let element = document.getElementsByClassName("type-policy");
  if (Boolean(element[0])) {
    document.getElementsByClassName("type-policy").remove();
    document.getElementsByClassName("button-area").remove();
    document.getElementsByClassName("hex-text").remove();
    document.getElementsByClassName("hue")[0].style.cssText = 'width: 150px';
    clearInterval(interval);
  }
}, 500);
