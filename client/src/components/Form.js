import axios from 'axios';
import {useState, useEffect} from 'react';

function Form(props) {
    const [autoComplete, setAutoComplete] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetch(`/cities`,{
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCities(data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    let getForecast = (e) => {
        e.preventDefault();  
        fetch(`/forecast?city=${e.target.city.value}`)      
        //axios.get(`${process.env.REACT_APP_AQI_API_URL}/feed/${e.target.city.value}/?token=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => {
                console.log(data.data.status);
                if(data.data.status === "error"){
                    props.handleFeedUpdate(null);
                    props.setIsInfoAvailable(false);
                } else{
                    props.handleFeedUpdate(data.data.data);
                    props.setIsInfoAvailable(true);
                }
                
            }).catch(err => {
                console.log(err);
                props.handleFeedUpdate(null);
                props.setIsInfoAvailable(false);
            });
    };

    let autoCompleteCity = (e) => {
        if(e.target.value === ""){
            setAutoComplete([]);
            return;
        }
       
        //filter array results with search and assign to state
        let autoCompleteResults = cities.filter(city => {
            return city.toLowerCase().includes(e.target.value.toLowerCase());
        });
        console.log("auto complete results", autoCompleteResults);
        if(autoCompleteResults){
            setAutoComplete(autoCompleteResults.slice(0,8));
        } else {
            setAutoComplete([]);
        }
        
    };

    let setAutocompleteVal = (e) => {
        document.getElementById("city-input").value = e.target.innerText;
        setAutoComplete([]);
    };

    return (
        <div className="form">
            <form onSubmit={getForecast}>
                <label style={{position: "relative"}}>
                    Search by city:
                    <input onChange={autoCompleteCity} type="text" name="city" id="city-input" autoComplete="off"/>
                    {autoComplete.length > 0 && 
                        <ul className="auto-complete">
                            {autoComplete.map((city, i) => {
                                return <li onClick={setAutocompleteVal} key={i}>{city}</li>
                            })}
                        </ul>
                    }                
                </label>
                <button type="submit" >Submit</button>
            </form>
            <p>{props.isInfoAvailable}</p>
            {props.isInfoAvailable === false &&
                <div className="form__error">
                    <p>There is no Air Quality Index information for this city.</p>
                </div>
            }
        </div>
    );
}
export default Form;
