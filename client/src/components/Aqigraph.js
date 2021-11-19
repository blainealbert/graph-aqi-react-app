import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Label } from 'recharts';

function Aqigraph(props) {

    return (
        <div className="aqigraph">   
            {props.dailyForecast &&
            <>
                <div className="card fadeIn">
                    <h2>PM2.5</h2>
                    <div className="aqigraph__data">

                        <LineChart width={600} height={350} style={{margin: "0 auto", textAlign: "center"}} data={props.dailyForecast.pm25.slice(0,5)}>
                            <XAxis dataKey="day" height={40}>
                                <Label value="Date" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis type='number' domain={[0, 'dataMax + 10']}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" key='0' dataKey="avg" strokeWidth={2} stroke="#EFBF2F"   />
                            <Line type="monotone" key='1' dataKey="max" strokeWidth={2} stroke="#64A64E"   />
                            <Line trype="monotone" key='2' dataKey="min" strokeWidth={2} stroke="#BE3846"   />
                        </LineChart>
                    </div>
                </div>
                <div className="card fadeIn">
                    <h2>PM10</h2>
                    <div className="aqigraph__data">

                        <LineChart width={600} height={350} style={{margin: "0 auto", textAlign: "center"}} data={props.dailyForecast.pm10.slice(0,5)}>
                            <XAxis dataKey="day" height={40}>
                                <Label value="Date" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis type='number' domain={[0, 'dataMax + 10']}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" key='0' dataKey="avg" strokeWidth={2} stroke="#EFBF2F"   />
                            <Line type="monotone" key='1' dataKey="max" strokeWidth={2} stroke="#64A64E"   />
                            <Line trype="monotone" key='2' dataKey="min" strokeWidth={2} stroke="#BE3846"   />
                        </LineChart>
                    </div>
                </div>
                <div className="card fadeIn">
                    <h2>O3</h2>
                    <div className="aqigraph__data">

                        <LineChart width={600} height={350} style={{margin: "0 auto", textAlign: "center"}} data={props.dailyForecast.o3.slice(0,5)}>
                            <XAxis dataKey="day" height={40}>
                                <Label value="Date" offset={0} position="insideBottom" />
                            </XAxis>
                            <YAxis type='number' domain={[0, 'dataMax + 10']}/>
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" key='0' dataKey="avg" strokeWidth={2} stroke="#EFBF2F"   />
                            <Line type="monotone" key='1' dataKey="max" strokeWidth={2} stroke="#64A64E"   />
                            <Line trype="monotone" key='2' dataKey="min" strokeWidth={2} stroke="#BE3846"   />
                        </LineChart>
                    </div>
                </div>
            </>
            }
        </div>
  );
}
export default Aqigraph;