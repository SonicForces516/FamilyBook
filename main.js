var images = 
["sloreline.jpg","samarth.jpg","saket.jpg","arya.jpg"]

var names =
["Family","Samarth","Saket","Arya"]

var i = 0;
function update()
{
 i++;
 var family_images = 4
 if(i>=family_images)
 {
     i = 0;
 }
 var updatedImage = images[i];
 var updatedname = names[i];
 document.getElementById("family_member_image").src = updatedImage
 document.getElementById("family_member_name").innerHTML = updatedname
}