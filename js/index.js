fetch("./assets/code.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });


function appendData(data) {
    var searchContainer = document.getElementById("searchBox");
    var searchDiv = document.createElement("div");
    var searchInput = document.createElement("input");
    var searchButton = document.createElement("button");
    
    searchDiv.classList.add("input-group", "mb-3");
    searchInput.classList.add("form-control"); 
    searchButton.classList.add("btn", "btn-primary"); 
    
    searchInput.type = "text";
    searchInput.placeholder = "Search..";
    searchInput.id = "inputValue";
    searchInput.value = "";
    searchButton.textContent = "Search";
    searchButton.onclick = function(){
        var searchValue = document.getElementById("inputValue").value;
        console.log(searchValue);
    };

    searchContainer.append(searchDiv);
    searchDiv.append(searchInput);
    searchDiv.append(searchButton);
    
    var mainContainer = document.getElementById("csharpCode");
    for (var i = 0; i < data.length; i++) {
        
        // creating dom elements
        var div = document.createElement("div");
        var card = document.createElement("div");
        var image = document.createElement("img");
        var card_body = document.createElement("div");
        var heading = document.createElement("h5");
        var anchor = document.createElement("a");
        var para = document.createElement("p");
        var file_info = document.createElement("div");
        var span = document.createElement("span");

        // styling
        div.classList.add("col", "mb-4");
        card.classList.add("card");
        image.classList.add("d-inline-block", "mr-2", "logo");
        card_body.classList.add("card-body", 'text-align', "size-of-card");
        anchor.classList.add("title-anchor")
        heading.classList.add("card-title", "d-inline-block");
        para.classList.add("card-text");
        file_info.classList.add("file-info","d-none", "text-center");
        span.classList.add("badge", "span-box", "badge-danger");

        // fetching data
        heading.innerHTML = data[i].data.statement;
        span.innerHTML = data[i].data.bookMark;
        // para.innerHTML = data[i].data.p;
        
        //   seting values
        image.src = './css/coding.svg';
        image.setAttribute("width", "25");
        anchor.href = data[i].data.url;

        // appending created dom elements.
        mainContainer.append(div);
        div.append(card);
        card.append(card_body);
        // card_body.appendChild(image);
        card_body.appendChild(anchor);
        anchor.appendChild(image);
        anchor.append(heading);
        // card_body.appendChild(para);
        card_body.appendChild(span);

        // icons loop
        for (let [key, value] of Object.entries(data[i].data.details)) {
            let classes = "";
            let icon = "";
            //   classes += key === "github" ? "text-secondary" : "text-success";
            //  text-colors
            if (key === "SubmitDate") classes += "text-secondary";
            else if (key === "Download") classes += "text-success";
            else classes += "text-info";

            // icons
            // if (key === "SubmitDate") icon += `<i class="far fa-clock" aria-hidden="true"></i>`;
            // else if (key === "Download") icon += `<i class="fas fa-file-download"; aria-hidden="true"></i>`;
            // else icon += `<i class="fab fa-readme"></i>`;
            //   icon +=
            //     key === "SubmitDate" ?
            //     `<i class="fab fa-github" aria-hidden="true"></i>` :
            //     `<i class="fas fa-code"; aria-hidden="true"></i>`;
            var links = document.createElement("a");
            var span = document.createElement("span");
            // links.href = value;
            links.setAttribute("target", "_blank");
            links.classList.add(classes);
            span.classList.add("iconPos");
            oneLineCode = `${icon} <b>  ${key}: </b>${value}`
            span.innerHTML = oneLineCode;
            card_body.append(file_info);
            file_info.appendChild(links);
            links.appendChild(span);
        }
    }
}