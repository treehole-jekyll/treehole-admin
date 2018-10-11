var editor = new mditor(document.getElementById('thole-editor'), {
  previewClass: 'treehole-article'
})


function readyNumber() {
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;');
  }).on('input', function () {
    // this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  })
}


readyNumber()


// hotkeys('ctrl+s', function(event,handler) {
//   event.preventDefault()
//   alert("ctrl s")
// });

var ctrlDown = false;
var sDown = false;

$("#thole-editor").bind("keydown",function(event){
  var k = event.which;
  if(k === 17){
    ctrlDown = true
    event.preventDefault()
  }
  if(ctrlDown){
    event.preventDefault()
    if(k == 83){
      funCtrlS()
    }
  }
});


$("#thole-editor").bind("keyup",function(event){
  var k = event.which;
  if(k === 17){
    ctrlDown = false
  }
});

function funCtrlS(){
  console.log("save")
}
