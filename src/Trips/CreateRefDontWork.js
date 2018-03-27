// // imports
// import React, {Component} from 'react';
// import Select from 'react-select';

// class CreateNewTrip extends Component {
//   durationRef = React.createRef();
//   locationRef = React.createRef();
//   typeRef = React.createRef();

//   componentDidMount() {
//     fetch('./countryList.json').then(res => res.json()).then(r => {
//       let countryArray = [];
//       r.forEach(l => {
//         countryArray.push({value: `${l.code}`, label: `${l.name}`});
//       });
//       this.countries = countryArray;
//       // this.setState({countries: countryArray});
//     });
//   }


//   addTrip = trip => {
//     fetch(`http://localhost:5000/api/Trip`, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(trip),
//     })
//       .then(res => res.json())
//       .then(r => {
//        console.log(r)
//       });
//   };

//   createTrip = event => {
//     event.preventDefault();
//     const trip = {
//       duration: this.durationRef.value,
//       location: this.locationRef.value,
//       tripType: this.typeRef.value,
//     };

//     console.log(trip)
//     this.addTrip(trip);

//     // refresh the form
//     event.currentTarget.reset();
//   };

//   render() {
//     return (
//       <div className="AddTripForm">
//         <form className="form-horizontal" onSubmit={this.createTrip}>
//           <div>
//             <label>How long do you intend this trip to be?</label>
//             <Select
//               name="duration"
//               id="duration"
//               ref={this.durationRef}
//               required
//               options={[
//                 {value: '1', label: '1-3 Days'},
//                 {value: '2', label: 'About a week'},
//                 {value: '3', label: '2 weeks'},
//                 {value: '4', label: '3 weeks - 1 month'},
//               ]}
//             />
//           </div>
//           <label>Where are you going?</label>
//           <div>
//             <Select
//               name="location"
//               id="location"
//               ref={this.locationRef}
//               required
//               options={this.countries}
//             />
//           </div>
//           <label>What activities do you plan on doing?</label>
//           <div>
//             <Select
//               name="duration"
//               id="duration"
//               ref={this.typeRef}
//               required
//               options={[
//                 {value: 'type1', label: 'Skii'},
//                 {value: 'type2', label: 'Cruise'},
//                 {value: 'type3', label: 'Beach Vacation'},
//                 {value: 'type4', label: 'Mountain Climbing'},
//                 {value: 'type5', label: 'Business'},
//                 {value: 'type6', label: 'Backpacking'},
//                 {value: 'type7', label: 'Desert/Arid'},
//               ]}
//             />
//           </div>
//           <button>Add a trip</button>
//         </form>
//       </div>
//     );
//   }
// }

// // exports
// export default CreateNewTrip;
