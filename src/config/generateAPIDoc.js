


const generateAPIDoc=(name, url, method, data, res)=>{

    let api = localStorage.getItem("ApiDoc")
    if(api === null){
        api = {}
    }else {
        api = JSON.parse(api)
    }
    api = {
        ...api,
        [name]:{url, method, data, res},
    }
    console.log("api: ",api)
    localStorage.setItem("ApiDoc", JSON.stringify(api))

    // // console.log("fs", fs)
    // fs.readFile("~/codebase/user.json", function(err, data) {
    //
    //     // Check for errors
    //     if (err) throw err;
    //
    //     // Converting to JSON
    //     let APIs = JSON.parse(data);
    //
    //     console.log(APIs); // Print users
    //
    //     APIs = {
    //         ...APIs,
    //         [name]:{url, method, data, res},
    //     }
    //     const Wdata = JSON.stringify(APIs);
    //     // write JSON string to a file
    //     fs.writeFile('~/codebase/user.json', Wdata, (err) => {
    //         if (err) {
    //             throw err;
    //         }
    //         console.log("JSON data is saved.");
    //     });
    //
    // });


}

export default  generateAPIDoc



