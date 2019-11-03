console.log("sup")
fetch("data.json")
    .then(res => res.json())
    .then(json => {
        console.log(json)
    })