import {useState, useEffect} from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'


const data3 = {
    labels: ["1월", "1월", "1월", "1월", "1월", "1월"],
    datasets: [
    {
        label: "싱가포르",
        data: [30,30, 30, 30, 30, 30],
        fill: false,
        backgroundColor: "salmon"
    }
    ]
};

const Sg= () => {

    const [quarantinedData, setQuarantinedData] = useState({
        
    })

    //데이터 가지고 오기
    useEffect(()=>{
        const fatchEvents = async ()=>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/Sg")
            makeData(res.data)   
           
        }
        
        //데이터 가공
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
           
                /*
                const findItem = acc.find(a => a.year === year && a.month === month);
                if(!findItem){
                    acc.push({
                        year : year,
                        month : month,
                        date : date,
                        confirmed : confirmed,
                        active : active,
                        death : death,
                        recovered : recovered
                    })
                }
                if(findItem && findItem.date < date){
                    findItem.active = active;
                    findItem.death = death;
                    findItem.date = date;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.recovered = recovered;
                    findItem.confirmed = confirmed;

                }
                */
                return acc;
                
            },[])
           
            
            // 그래프 가공된 데이터 넣기
            const labels = arr.map(a=> `${a.year}년 ${a.month+1}월 ${a.date}일`);
          
            setQuarantinedData({
                labels,
                datasets:[
                    {
                        label: "싱가포르 일별 추이",
                        backgroundColor: "salmon",
                        fill: false,
                        data: arr.map(a => a.death)
                    },
                ]

            });

        }
        
        fatchEvents();
    }, [])


    if(quarantinedData.labels !== undefined) {
        return (
            <section>

                <div className="contents">          
                        <div>
                        <Line data={quarantinedData} options = {
                                {title: {display: true, text: "확진자 추이", fontSize:16}},
                                {legend: {display: true, position:"bottom"}}
                            }/>
                        
                        </div>
            
                </div>
            </section>
        )
    }

    return (
        <section>
            <div className="contents">          
                    <div>
                    <Line data={data3} options = {
                                {title: {display: true, text: "확진자 추이", fontSize:16}},
                                {legend: {display: true, position:"bottom"}}
                            }/>
                    
                    </div>
        
            </div>
        </section>
    )
    
}

export default Sg