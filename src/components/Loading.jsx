import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loading = () => {
    return (
        <>
            <Skeleton style={{ width: 1000, height: 100 }} />
            <Skeleton style={{ width: 1000, height: 100 }} />
            <Skeleton style={{ width: 1000, height: 100 }} />
            <Skeleton style={{ width: 1000, height: 100 }} />
        </>
    )
}

export default Loading