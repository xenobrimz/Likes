var likesElement1 = document.querySelector(" #post1 .likes p");
var likesElement2 = document.querySelector(" #post2 .likes p");
var likesElement3 = document.querySelector(" #post3 .likes p");

var likes1 = 0;
var likes2 = 0;
var likes3 = 0;

function addLike(element){
    var likeElements_arr = ["post1", "post2", "post3"]
    for(var i = 0; i < likeElements_arr.length; i++){
        if(element == likeElements_arr[i]){
            if(element == "post1"){
                likes1++
                likesElement1.innerText= likes1 + "Like(s)";
            }
            if(element == "post2"){
                likes2++
                likesElement2.innerText= likes2 + "Like(s)";
            }
            if(element == "post3"){
                likes3++
                likesElement3.innerText= likes3 + "Like(s)";
            }
        }
        
    }
}