import axios from 'axios'
import { useEffect, useState } from 'react'

const ViewPet = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view-pets").then(

            (response) => {

                changeData(response.data)

            }

        ).catch()

    }

    useEffect(

        () => {

            fetchData()

        }, []

    )

    return (
        <div>


            <div className="container-fluid px-2 mt-4">

                <h1 className="text-center mb-4">Pet Bookings</h1>

                <div className="row">
                    <div className="col-12">

                        <div className="table-responsive">

                            <table className="table table-light table-striped">

                                <thead>
                                    <tr>
                                        <th>Booking ID</th>
                                        <th>Pet Name</th>
                                        <th>Pet Type</th>
                                        <th>Breed</th>
                                        <th>Age</th>
                                        <th>Weight(kg)</th>
                                        <th>Vaccination Status</th>
                                        <th>Owner Name</th>
                                        <th>Owner Phone</th>
                                        <th>Owner Email</th>
                                        <th>Check-in Date</th>
                                        <th>Check-out Date</th>
                                        <th>Kennel Number</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {data.map((value) => (

                                        <tr key={value.booking_id}>

                                            <td>{value.booking_id}</td>
                                            <td>{value.pet_name}</td>
                                            <td>{value.pet_type}</td>
                                            <td>{value.breed}</td>
                                            <td>{value.age}</td>
                                            <td>{value.weight}</td>
                                            <td>{value.vaccination_status}</td>
                                            <td>{value.owner_name}</td>
                                            <td>{value.owner_phone}</td>
                                            <td>{value.owner_email}</td>
                                            <td>{value.check_in_date}</td>
                                            <td>{value.check_out_date}</td>
                                            <td>{value.kennel_number}</td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default ViewPet