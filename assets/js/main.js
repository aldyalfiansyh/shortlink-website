document.getElementById("myinput").onclick = function() {
    var link = document.getElementById("linkinput").value;
    var data = {
        "domain": "YOUR_DOMAIN",
        "originalURL": link,
        "allowDuplicates": false
    };
    fetch('https://api.short.cm/links/public', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'API_KEY'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("message").innerHTML = "Link kamu adalah " + data.shortURL;
    });
    document.getElementById("linkinput").value = '';
};