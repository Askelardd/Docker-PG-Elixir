import Login from "../Menus/Login";
import Registo from "../Menus/Registo";
import TopTeams from "../Menus/TopTeams";
import InserirCrash from "../Menus/InserirStudents";
import ListarCrash from "../Menus/ListarStudents";


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
        id: "insert-crash",
        label: "Inserir Crash",
        content: <InserirCrash/>,

    },


    

    {
        id: "listar-crash",
        label: "Listar Crash",
        content: <ListarCrash/>,

    }

];

export default Sections;