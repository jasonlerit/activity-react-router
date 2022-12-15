import { useEffect, useState } from "react"

const Time = () => {

    const [time, setTime] = useState()
    const [date, setDate] = useState()

    useEffect(() => {
        updateTime()
        setDate(() => new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}))
    }, [])

    const updateTime = () => {
        setInterval(() => {
            const currentTime = new Date().toLocaleTimeString()
            setTime(() => currentTime)
        }, 1000)
    }

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">
                    {time}
                </p>
                <p className="card-text">
                    {date}
                </p>
            </div>
        </div>
    )
}

export default Time