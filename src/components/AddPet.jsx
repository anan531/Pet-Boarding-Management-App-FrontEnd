import axios from 'axios'
import React, { useState } from 'react'

const AddPet = () => {

    const [input, changeInput] = useState(
        {
            "booking_id": "",
            "pet_name": "",
            "pet_type": "",
            "breed": "",
            "age": "",
            "weight": "",
            "vaccination_status": "",
            "owner_name": "",
            "owner_phone": "",
            "owner_email": "",
            "check_in_date": "",
            "check_out_date": "",
            "kennel_number": ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add-pet", input).then(

            (response) => {

                console.log(response.data)
                alert("Pet booking added successfully")

            }

        ).catch(

            (error) => {

                console.error("Error adding booking:", error)
                alert("Failed to add booking")

            }

        )

    }

    return (
        <div>


            <h1 align="center">Add Pet</h1>

            <div className="container">
                <div className="row g-3">
                    <div className="col col-12">

                        <div className="container">
                            <div className="row g-3">

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Booking ID</label>
                                    <input type="text" className="form-control" name="booking_id" value={input.booking_id} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Pet Name</label>
                                    <input type="text" className="form-control" name="pet_name" value={input.pet_name} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Pet Type</label>
                                    <select className="form-control" name="pet_type" value={input.pet_type} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Bird">Bird</option>
                                        <option value="Rabbit">Rabbit</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Breed</label>
                                    <input type="text" className="form-control" name="breed" value={input.breed} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Age</label>
                                    <input type="number" className="form-control" name="age" value={input.age} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Weight (kg)</label>
                                    <input type="number" className="form-control" name="weight" value={input.weight} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Vaccination Status</label>
                                    <select className="form-control" name="vaccination_status" value={input.vaccination_status} onChange={inputHandler}>
                                        <option value="">Select</option>
                                        <option value="Up to Date">Up to Date</option>
                                        <option value="Pending">Pending</option>
                                    </select>
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Owner Name</label>
                                    <input type="text" className="form-control" name="owner_name" value={input.owner_name} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Owner Phone</label>
                                    <input type="tel" className="form-control" name="owner_phone" value={input.owner_phone} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Owner Email</label>
                                    <input type="email" className="form-control" name="owner_email" value={input.owner_email} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Check-in Date</label>
                                    <input type="date" className="form-control" name="check_in_date" value={input.check_in_date} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Check-out Date</label>
                                    <input type="date" className="form-control" name="check_out_date" value={input.check_out_date} onChange={inputHandler} />
                                </div>

                                <div className="col col-12 col-sm-6">
                                    <label className="form-label">Kennel Number</label>
                                    <input type="text" className="form-control" name="kennel_number" value={input.kennel_number} onChange={inputHandler} />
                                </div>

                                <div className="col col-12">
                                    <button className="btn btn-dark" onClick={readValue}>SUBMIT</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddPet