
function deleteBlog(blogUrl){
 alert("Delete URl"+ blogUrl);
  $.ajax(
  url : blogUrl,
  type: "DELETE",
  success: function(html){
    alert("ok, deleted");
    location.reload();
   }
 )
}
