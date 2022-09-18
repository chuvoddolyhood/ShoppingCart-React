import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from './../../config/Config'

const AddUser = () => {
    const [user, setUser] = useState([])
    const userCollectionRef = collection(db, "users");

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    useEffect(() => {
        const getUser = async () => {
            const data = await getDocs(userCollectionRef)
            setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }

        getUser()
    }, [])

    const createUser = async () => {
        await addDoc(userCollectionRef, { name: name, age: Number(age) })
    }

    const updateUser = async (id, age) => {
        const userDoc = doc(userCollectionRef, id)
        const newAge = { age: age + 1 };
        await updateDoc(userDoc, newAge)
    }

    const deleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }

    return (
        <div className='add-user'>
            <input type="text" placeholder='Name' onChange={(event) => setName(event.target.value)} />
            <input type="number" placeholder='Age' onChange={(event) => setAge(event.target.value)} />
            <button onClick={createUser}>Add</button>


            {user.map((u, index) => {
                return (
                    <div className='user' key={index}>
                        <h1>{u.name}</h1>
                        <p>{u.age}</p>
                        <button onClick={() => { updateUser(u.id, u.age) }}>Increase Age</button>
                        <button onClick={() => { deleteUser(u.id) }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AddUser