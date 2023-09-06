import { useState, useEffect } from "react"
import { axios } from "axios"

const FollowerList = () => {
    const [followers, setFollowers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchFollowers()
    })

    const fetchFollowers = async () => {
        try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
            setFollowers(data)
        } catch( error ) { 
            setError("Error Fetching Follower")
        }
    }

    return (<div>
        {followers?.map((follower, index) => {
            return (<h1 key={index} data-testid={`follower-item-${index}`}>
                {follower.name}
            </h1>)
        })}
        {error && <p>{error}</p>}
    </div>)
}

export default FollowerList