function preview() {
  const files = $('#fileload')[0].files

  const filesList = []
  for (let i = 0; i < files.length; i++) {
    filesList.push(files[i])
  }

  filesList.filter(ele => fileTypeFilter(ele)).filter(ele => fileSizeFilter(ele)).forEach(ele => {
    readImage(ele)
  })
}


/**
 *  过滤文件格式
 * @param {File} file
 * @returns {Boolean} isAccept
 */
function fileTypeFilter(file) {
  const result = $.inArray(file.type, ["image/png", "image/gif", "image/jpg", "image/jpeg"]) >= 0
  if (!result) {
    console.log("file type not accepted", file.type)
  }
  return result
}

/**
 * 过滤文件大小
 * @param {File} file
 */
function fileSizeFilter(file) {
  const result = file.size < 2014 * 1024 * 100
  if (!result) {
    console.log("file size not accepted", file.size)
  }
  return result
}

/**
 * 读取图片文件
 * @param {File} file
 */
function readImage(file) {
  const reader = new FileReader();
  const warpperWidth = $("#upload-warpper").width()
  const warpperHeight = $("#upload-warpper").height()
  console.log(warpperHeight)
  reader.readAsDataURL(file);
  reader.onload = function (e) {
    url = reader.result
    const img = new Image()
    img.src = url
    const width = img.width
    const height = img.height
    let size = ""
    if (width > height) {
      size = "auto 100%"
    } else {
      size = "100% auto"
    }
    $("#upload-warpper")
      .css("background-image", 'url("' + url + '")')
      .css('background-size', "100%")
      .css('background-repeat', 'no-repeat')
      .css('background-position', 'top')

    $(".upload-text").hide()
  };
}
