        var hasInputImg= false;
        var id =0;
        var data=[];
        var isEdit=false;
        var item_id;
        var dateTime;
        var item_img_post="";
        var item_img_user;
          function imageFileAsURL(){
            var fileSelected= document.getElementById('input-img').files;
            if(fileSelected.length>0){
              var fileToLoad = fileSelected[0];
              var fileReader = new FileReader();
              fileReader.onload = function(fileLoaderEnvent){
               var srcData= fileLoaderEnvent.target.result;
                document.getElementById('show-img').src=srcData;
                hasInputImg=true;
              }
              fileReader.readAsDataURL(fileToLoad);
            }
          }
          function add(){
            if(!isEdit){
              item_id = id;
              var today = new Date();
              var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
              var time = today.getHours() + ":" + today.getMinutes();
              dateTime = date+' '+time;
            }
            var item_status = document.getElementById("dialog-input").value ;
            if(hasInputImg||item_status!=""){
            if(hasInputImg){
              item_img_post = document.getElementById('show-img').src;
            }
            item_img_user= document.getElementById('img-user').src;
            var item_time = dateTime;
            id = id+1;
            var item ={
              Id: item_id,
              Time:item_time,
              Status:item_status,
              Img_user: item_img_user,
              Img_post: item_img_post,
              Input_img: hasInputImg
            }
            let index = data.findIndex((c)=>c.Id==item.Id)
            if(index>=0){
              data.splice(index,1);
              
            }
            data.push(item);
            render();
            clear();
            hideDialog('my-dialog');
            isEdit=false;
            hasInputImg=false;
            }
            else{
              alert("Hãy nhập một hình ảnh hoặc một dòng trạng thái bạn nhé!")
            }
          }
          function render(){
            post = ''
            
            for(let i=0;i<data.length;i++){
              if(data[i].Input_img){
                var img_show = '<img src="'+data[i].Img_post+'" class="post-img" id="post-img">';
              }else{
                img_show="";
              }
              post+='<li>'
                +'<div class="post-container">'
                +    '<div class="post-row">'
                +       '<div class="user-profile">'
                 +           '<img id="user-profile-img" src="'+data[i].Img_user+'" >'
                  +          '<div>'
                   +             '<p id="user-name">Thanh Phụng</p>'
                    +            '<span id="post-day">'+data[i].Time+'</span>'
                    +       '</div>'
                    +  '</div>'
                    + '<div><i class="fas fa-ellipsis-h ellipsis" onclick="showDialogSeeMore('+data[i].Id+')"></i>'
                    +'<div id="see-more'+data[i].Id+'" class="see-more">'
                    +  '<i class="fas fa-times" id="close-see-more" onclick="hideDialogSeeMore('+data[i].Id+')"></i>'
                    + '<div id="delete-btn" class="see-more-btn" onclick="deleteItem('+data[i].Id+')">Xoá bài viết</div>'
                    +  '<div id="edit-btn" class="see-more-btn" onclick="editItem('+data[i].Id+')">Sửa bài viết</div>'
                    +  '</div>'
                    +  '</div>'
                    +'</div>'
                    
                    +'<p class="post-text" id="post-text"> '+data[i].Status+' </p>'
                +img_show
    
                 +   '<div class="post-row">'
                  +      '<div class="activity-icons">'
                   +         '<div><i class="far fa-heart"></i>0</div>'
                    +        '<div><i class="far fa-comment"></i>0</div>'
                     +       '<div><i class="far fa-share-square"></i>0</div>'
                      +  '</div>'
                       + '<div class="post-profile-icon">'
                        +    '<img src="'+data[i].Img_user+'" id="post-profile-icon">'
                            
                        +'</div>'
                    +'</div>'
                +'</div>'
            +'</li>'
              
            }
            document.getElementById("list-post").innerHTML=post;
          }
          function clear(){
            document.getElementById("dialog-input").value="";
            document.getElementById("show-img").src="";
          }
          function deleteItem(id){
            for(let i=0;i<data.length;i++){
              if(data[i].Id==id){
                data.splice(i,1);
                render();
              }
            }
          }
          function editItem(id){
            isEdit =true;
            document.getElementById('show-img').src="";
            for(let i=0;i<data.length;i++){
              if(data[i].Id==id){
                showDialog("my-dialog");
                item_id=data[i].Id;
                item_time =data[i].Time;
                hasInputImg= data[i].Input_img;
                document.getElementById("dialog-input").value=data[i].Status;
                document.getElementById('img-user').src = data[i].Img_user;
                if(data[i].Input_img){
                  document.getElementById("show-img").src=data[i].Img_post;
                }
              }
            }
          }
          function hideDialog(dialog){
            document.getElementById(dialog).style.visibility="hidden";
            clear();
          }
          function hideDialogSeeMore(id){
            document.getElementById('see-more'+id).style.display="none";
          }
          function showDialog(dialog){
            document.getElementById(dialog).style.visibility="visible";
          }
          function showDialogSeeMore(id){
            document.getElementById('see-more'+id).style.display="block";
          }