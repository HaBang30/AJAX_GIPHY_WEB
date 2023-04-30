
 // const APIKEY = "sDtLTXp2sDr3IV8du4cJ1rBo5L5kiKiG";
        // document.addEventListener("DOMContentLoaded", init);
        // function init() {
        //     document.getElementById("btnSearch").addEventListener('click', ev =>{
        //         ev.preventDefault();
        //         let url =`http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
        //         let str = document.getElementById("search").value.trim();
        //         url = url.concat(str);
        //         console.log(url);
        //         fetch(url)
        //         .then (response => response.json())
        //         .then (content => {
        //             //data, pagination, meta
        //             console.log(content.data);
        //             console.log('META:', content.meta)
        //             let fig = document.createElement("figure");
        //             let img = document.createElement("img");
        //             let fc = document.createElement("figcaption");
        //             img.src = content.data[0].images.downsized.url;
        //             img.alt = content.data[0].title;
        //             fc.textContent = content.data[0].title;
        //             fig.appendChild(img);
        //             fig.appendChild(fc);
        //             let out = document.querySelector('.out');
        //             out.insertAdjacentElement("afterbegin", fig);

        //         })
        //         .catch(err =>{
        //             console.error(err);
        //         });
        //         document.getElementById("search").value = "";
                
        //     })
        // }

        const APIKEY = "sDtLTXp2sDr3IV8du4cJ1rBo5L5kiKiG"; 
        document.addEventListener("DOMContentLoaded", init);
        function init() {
            document.getElementById('btnSearch').addEventListener('click', ev => {
                    ev.preventDefault();
                    let url = `http://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=2&q=`;
                    let getValue = document.getElementById("search").value;
                    url = url.concat(getValue);
                    console.log(url);
                    fetch(url)
                    .then (response => response.json())
                    .then (content => {
                        console.log(content.data);
                        console.log(content.meta);
                        let div = document.createElement("div");
                        div.id = "loadImg";
                        let img = document.createElement("img");
                        let p = document.createElement("p");
                        div.appendChild(img);
                        div.appendChild(p);
                        img.src = content.data[0].url;
                        img.src = content.data[0].images.downsized.url;
                        img.alt = content.data[0].title;
                        // p.textContent = content.data[0].title;
                        let out = document.getElementById("outPut");
                        out.insertAdjacentElement("beforebegin", div);

                    })
                    .catch(err =>{
                        console.log("Error :", err);
                    })
                    document.getElementById("search").value = "";
            });
        }