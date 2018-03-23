// api key a396c04e6ce8d9c6
// https://www.wunderground.com/weather/api/d/docs
import React, {Component} from 'React'
cconstructor(props) {
    super(props);
    this.state = {
      remoteURL: `http://localhost:5000/api/`,
      countries: [],
    }
}

fetchJSON = () => {
    fetch('./countryList.json').then(res => res.json()).then(r => {
        let countryArray = [];
        r.forEach(l => {
          countryArray.push({value: `${l.name}`, label: `${l.code}`});
        });
        this.state.setState({countries: countryArray});
      });
}

fetchWeather = () => {
    fetch(`http://api.wunderground.com/api/a396c04e6ce8d9c6/geolookup/conditions/q/IA/${this.state.SelectionLocation}.json`).then(res => res.json()).then(r =>{
        console.log(r)
    }
)

}



