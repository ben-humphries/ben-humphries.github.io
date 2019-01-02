function append_post(url){
 	var rawFile = new XMLHttpRequest();
 	console.log("here");
    rawFile.open("GET", url);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                div = document.createElement('div');
                div.innerHTML = allText;
                document.getElementById("posts").appendChild(div);
            }
        }
    }
    rawFile.send(null);
  }

  function append_all_posts(urls){
    urls_list = urls.split(',');
    console.log(urls_list);
    for(i = 0; i < urls_list.length; i++){
        append_post(urls_list[i]);
    }
  }