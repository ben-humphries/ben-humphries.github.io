function filterSearch() {

    var input, filter, div, posts, i;
    input = document.getElementById("dropdownSearch");
    filter = input.value.toUpperCase();
    div = document.getElementById("main");
    posts = div.getElementsByClassName("post");

    if(input.length < 1){
        for(i = 0; i < posts.length; i++){
            posts[i].style.display = "";
        }
    }
    else{

        for (i = 0; i < posts.length; i++) {
            if (posts[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                posts[i].style.display = "";

            } else {
                posts[i].style.display = "none";

            }
        }
    }
}