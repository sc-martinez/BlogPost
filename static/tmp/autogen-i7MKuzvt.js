function putBlogPost(){$.ajax({url:"/json/Blog/new",type:"PUT",data:'{"article":{"markdown":"JSON"},"uid":2,"title":"JSON"}',success:function(data){alert(data)},error:function(xhr,status,error){alert(xhr.responseText)},dataType:"json"})}