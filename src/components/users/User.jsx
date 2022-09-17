import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Loading from '../Loading';

const User = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    const [geo, setGeo] = useState({ lat: 10.815867, lng: 106.732017 })

    useEffect(() => {
        const getUser = async () => {
            const respone = await fetch("https://fakestoreapi.com/users")
            const data = await respone.json()
            setUser(data)
            console.log(data);
            setLoading(false)
        }
        getUser()
    }, [])

    const { isLoaded } = useLoadScript({ googleMapsApiKey: "AIzaSyB6x9uVHtA4LJXl26uyh12h3oOZVqSYpqQ" })

    function Map() {
        const hcmc = { lat: 10.815867, lng: 106.732017 }
        const cantho = { lat: 10.042895, lng: 105.754108 }
        return (
            <GoogleMap zoom={4} center={geo} mapContainerStyle={{ width: '100%', height: '50vh' }}>
                {user.map((geo, index) => {
                    return (
                        <Marker key={index} position={{ lat: Number(geo.address.geolocation.lat), lng: Number(geo.address.geolocation.long) }} />
                    )
                })}
                <Marker position={hcmc} />
                <Marker position={cantho} />
            </GoogleMap>
        )
    }

    const UserInfo = () => {
        return (
            <>
                <h1 style={{ textAlign: 'center' }}>User Information</h1>
                <table style={{ width: '100%', textAlign: 'center' }}>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        {/* <th>Zipcode</th>
                        <th>Email</th>
                        <th>Geolocation</th> */}
                        <th>View</th>
                    </tr>
                    {user.map((us, index) => {
                        return (
                            <tr key={index}>
                                <td>{us.id}</td>
                                <td>{us.name.firstname + ' ' + us.name.lastname}</td>
                                <td>{us.phone}</td>
                                <td>{us.address.number + ', ' + us.address.street + ', ' + us.address.city}</td>
                                {/* <td>{us.address.zipcode}</td>
                                <td>{us.email}</td>
                                <td>{us.address.geolocation.lat + ' : ' + us.address.geolocation.long}</td> */}
                                <button onClick={() => setGeo({ lat: Number(us.address.geolocation.lat), lng: Number(us.address.geolocation.long) })}>View</button>
                            </tr>
                        )
                    })}
                </table>
            </>
        )
    }

    if (!isLoaded || loading) return <Loading />
    return (
        <>
            <Map />
            <UserInfo />
        </>
    )


}

export default User