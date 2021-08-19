import NavBar from "../Components/navbar"
import Description from "../Components/description"
import HotelsAlbum from "../Components/hotelsalbum"
import {useSelector} from "react-redux"
import {Redirect} from "react-router-dom"

function MainPage() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    // const username = useSelector(state => state.auth.username)
  
    if (isAuthenticated) {
      console.log(isAuthenticated)
      return <Redirect to='/home' />;
    }
    
    return (
        <>
            <NavBar />
            <main>
                <Description />
                <HotelsAlbum/>
            </main>
        </>
    )
}

export default MainPage