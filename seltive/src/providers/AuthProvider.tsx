import { useEffect} from "react"
import { useNavigate } from "react-router-dom";


interface IProps {
    children: React.ReactNode
}

export default function AuthProvider({children}: IProps){
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token === null) {
            navigate("/login", {replace: true});
        }
    }, [])

    return(
        <main>
            {children}
        </main>
    )
}