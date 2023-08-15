import { useEffect, useState } from "react"

const useUserInfo = () => {
    const [userInfo, setUserInfo] = useState(null)
    console.log(userInfo)
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/kharerishabh')

        const json = await data.json()
        setUserInfo(json)
        console.log(json)
    }
    console.log(userInfo)
    return userInfo
}

export default useUserInfo