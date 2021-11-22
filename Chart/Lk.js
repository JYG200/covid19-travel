var canvasElement = document.getElementById("LkChart");

const makeData = (items) =>{
    const arr = items.reduce((acc,cur)=>{
        const currentDate = new Date(cur.Date);
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const date = currentDate.getDate();
        const confirmed = cur.Confirmed;
        const active = cur.Active;
        const death = cur.Deaths;
        const recovered = cur.Recovered;

        acc.push({
            year : year,
            month : month,
            date : date,
            confirmed : confirmed,
            active : active,
            death : death,
            recovered : recovered
        })

        return acc;
        
    },[])
    
    // 그래프 가공된 데이터 넣기
    const labels1 = arr.map(a=> `${a.year}년 ${a.month+1}월 ${a.date}일`);
    var config1 = {
        type: 'line',
        data: {
            labels: labels1,
            datasets: [{
                label: "스리랑카",
                        backgroundColor: "salmon",
                        fill: false,
                        data: arr.map(a => a.death)
                }]
            },
    };
    var LkChart = new Chart(canvasElement,config1);
}


//var testChart = new Chart(canvasElement,config);
console.log("next is api level")

fetch("https://api.covid19api.com/total/dayone/country/lk")
  .then((response) => response.json())
  .then((data) =>  makeData(data));
 