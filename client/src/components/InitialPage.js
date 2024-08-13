import { useEffect } from "react"
import { useNavigate } from "react-router"

const InitialPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('\home')
    },[])

    return (
        <></>
    )
}
export default InitialPage