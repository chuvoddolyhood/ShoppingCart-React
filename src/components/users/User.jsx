import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const User = () => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

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
        const marker = { lat: 10.815867, lng: 106.732017 }
        return (
            <GoogleMap zoom={2} center={marker} mapContainerStyle={{ width: '100%', height: '100vh' }}>
                {user.map((geo, index) => {
                    return (
                        <Marker key={index} position={{ lat: Number(geo.address.geolocation.lat), lng: Number(geo.address.geolocation.long) }} />
                    )
                })}
                <Marker position={marker} />
            </GoogleMap>
        )
    }

    if (!isLoaded || loading) return <div>Loading...</div>
    return (
        <Map />
    )


}

export default User