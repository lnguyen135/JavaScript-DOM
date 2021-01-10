// Get ToC div
    toc = document.getElementById("ToC");

    //Add a header
    tocHeader = document.createElement("h1");
    toc.appendChild(tocHeader);

    tocHeader = document.createElement("h2")
    toc.appendChild(tocHeader);
    ;
    tocHeader = document.createElement("h3");
    toc.appendChild(tocHeader);

    tocHeader.innerText="Table of Contents";



   

    // Create a list for the ToC entries
    tocList = document.createElement("ul");    

    // Get the h1,h2,h3 tags - ToC entries
    headersOne = document.getElementsByTagName("h1");
    headersTwo = document.getElementsByTagName("h2");
    headersThree = document.getElementsByTagName("h3");

    const headers = [headersOne, headersTwo, headersThree];


    // For each h
    for (i = 0; i < headers.length; i++){
     
      let currentHeaders = [...headers[i]];
 
      currentHeaders.forEach( (header,index) => {
       if(header.innerText && header.innerText !== "Table of Contents"){
        var name = "h"+index+i;
        header.id=name;
       
        // a list item for the entry
        tocListItem = document.createElement("li");
  
        // a link for the h
        tocEntry = document.createElement("a");
        tocEntry.setAttribute("href","#"+name);
        tocEntry.innerText=header.innerText;
       
        tocListItem.appendChild(tocEntry);
        tocList.appendChild(tocListItem);
        toc.appendChild(tocList);
       }
     
      })
    
    }
  