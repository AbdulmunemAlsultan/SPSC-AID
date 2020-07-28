$(document).ready(function(){

    $("#show-can").click(function(){
        // var space  = document.getElementById("name").value;
        // console.log(space+'');
	     $("#imageCanvas").css('visibility','visible');
        $("#imageCanvas").slideDown(1200);
        $("#but-download").slideDown(1200);
      });

  });

var text_title = "";
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);
var canvas = document.getElementById('imageCanvas');
var ctx = canvas.getContext('2d');
var img = new Image();
img.crossOrigin="anonymous";
// img.crossOrigin="image.jpg";

window.addEventListener('load', DrawPlaceholder)

 function DrawPlaceholder() {
     img.onload = function() {
         DrawOverlay(img);
         DrawText();
         DynamicText(img)
   };
     //  img.src = 'https://unsplash.it/400/400/?random';
img.src = 'https://raw.githubusercontent.com/AbdulmunemAlsultan/LabWebsite/master/img/final.jpg';
}
function DrawOverlay(img) {
    ctx.drawImage(img,0,0);
    ctx.fillStyle = 'rgba(30, 144, 255, 0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function DrawText() {
    ctx.fillStyle = "#31abe4";
    ctx.textBaseline = 'middle';
    ctx.font = "22px 'Almarai', sans-serif";
    ctx.fillText(text_title, 320, 320);
}
function DynamicText(img) {
  document.getElementById('name').addEventListener('keyup', function() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
     DrawOverlay(img);
     text_title = this.value;
     ctx.fillText(text_title, 320, 320);  
     console.log(text_title);
     DrawText(); 
     
    

});
}
function handleImage(e) {
    var reader = new FileReader();
    var img = "";
    var src = "";
    reader.onload = function(event) {
        img = new Image();
        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            
            ctx.drawImage(img,0,0);
        }
        img.src = event.target.result;
        src = event.target.result;
        
        canvas.classList.add("show");
        DrawOverlay(img);
        DrawText(); 
        DynamicText(img);   
    }

    reader.readAsDataURL(e.target.files[0]); 
 
}

function convertToImage() {
	window.open(canvas.toDataURL('png'));
}
// document.getElementById('download').onclick = function download(){
// 		convertToImage();
// }

function download(){
    var download = document.getElementById("download");
    var image = document.getElementById("imageCanvas").toDataURL("png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
    //download.setAttribute("download","archive.png");
    }
