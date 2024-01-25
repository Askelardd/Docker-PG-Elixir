import Login from "../Menus/Login";
import Registo from "../Menus/Registo";
import TopTeams from "../Menus/TopTeams";


const Sections = [

    {
        id: "top-teams",
        label: "Top Teams",
        content: <TopTeams/>
    },

    {
        id: "login",
        label: "Login",
        content: <Login/>
    },


    {
        id: "registo",
        label: "Registo",
        content: <Registo/>
    },

    {
        id: "something-else",
        label: "Something Else",
        content: <h1>Something else - Work in progresss</h1>
    }

];

export default Sections;