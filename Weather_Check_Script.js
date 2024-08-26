let btn = document.getElementById("btn")
        let tempreture = document.getElementById("tempreture")
        let wind = document.getElementById("wind")
        let description = document.getElementById("description")
        let loca = document.getElementById("location")
        btn.addEventListener("click", () => {
            l = loca.value
            last(l)
        })
        let getWeather = async () => {
            console.log(l)

            let p = fetch(`https://goweather.herokuapp.com/weather/${l}`);
            p.then((response) => {
                console.log(response.status)
                return response.json();
            }).then((value1) => {
                console.log(value1);
                tempreture.innerText = "Temperature: " + value1.temperature
                wind.innerText = "Wind: " + value1.wind
                description.innerText = "Description: " + value1.description
            })
        }
        let last = async () => {
            try {
                let w = await getWeather(l)
            } catch (error) {
                console.log(`chummiii i got an error`)
                console.error(error);

                tempreture.innerText = "Temperature: I Don't Know That"
                wind.innerText = "Wind: That also"
                description.innerText = "Description: And also that"

            } finally {
                console.log("finish")
            }
        }
        let container = document.getElementById("container")
        window.addEventListener("load",()=>{
            container.style.transform = "translateY(-50px) "     
        })