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

$("#thole-editor").bind("keydown", function (event) {
  var k = event.which;
  const ctrlK = getOsType()
  if (k === ctrlK) {
    ctrlDown = true
    event.preventDefault()
  }
  if (ctrlDown) {
    event.preventDefault()
    if (k == 83) {
      funCtrlS()
    }
  }
});

function getOsType(){
   const agent = navigator.userAgent
   if(agent.indexOf("Mac") != -1){
     return 91
   }else{
     return 17
   }
}


$("#thole-editor").bind("keyup", function (event) {
  var k = event.which;
  const ctrlK = getOsType()
  if (k === ctrlK) {
    ctrlDown = false
  }
});

function funCtrlS() {
  saveArticle()
}

function saveArticle() {
  console.log("save")
}


$("#input-tags").tagsinput();
