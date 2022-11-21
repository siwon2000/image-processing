var openFile = function(file) {
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var imageUpload = document.getElementById('imageUpload');
      imageUpload.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  };