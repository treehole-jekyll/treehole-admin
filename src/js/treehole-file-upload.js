$(function () {
  $.fn.filepond.registerPlugin(FilePondPluginImagePreview);
  $.fn.filepond.registerPlugin(FilePondPluginImageResize);
  $.fn.filepond.registerPlugin(FilePondPluginFileValidateType);
  // Turn input element into a pond
  $('.my-pond').filepond();
  // Set allowMultiple property to true
  $('.my-pond').filepond('allowMultiple', true);

  $('.my-pond').filepond('labelIdle', "请选择图片");
  $('.my-pond').filepond('imagePreviewHeight', 70);
  $('.my-pond').filepond('imageCropAspectRatio', '1:1');
  $('.my-pond').filepond('imageResizeTargetWidth', 100);

  // Listen for addfile event
  $('.my-pond').on('FilePond:addfile', function (e) {
    console.log('file added event', e);
  });
  // Manually add a file using the addfile method
  $('.my-pond').first().filepond('addFile', 'index.html').then(function (file) {
    console.log('file added', file);
  });
})
