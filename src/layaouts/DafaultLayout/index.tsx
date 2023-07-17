import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LeyoutContainer } from "./styles";


export function DefaultLayout(){
    return(
        <LeyoutContainer>
            <Header/>
            <Outlet/>
        </LeyoutContainer>
    )
}