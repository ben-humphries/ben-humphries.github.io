function append_post(url){
 	var rawFile = new XMLHttpRequest();
 	console.log("here");
    rawFile.open("GET", url);
    rawFile.onload = function () {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                div = document.createElement('div');
                div.innerHTML = allText;
                document.getElementById(url).appendChild(div);
                //dummy commit
            }
        }
    }
    rawFile.send(null);
  }

  function append_all_posts(urls){
    urls_list = urls.split(',');
    console.log(urls_list);
    for(i = 0; i < urls_list.length; i++){
        div = document.createElement('div');
        div.setAttribute("id", urls_list[i]);
    }
    for(i = 0; i < urls_list.length; i++){
        append_post(urls_list[i]);
    }
  }