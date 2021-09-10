import NavBar from "./components/navbar";
import Footer from "./components/footer";
import DataTable from "./components/datatable";

function App() {
    return (
        <>
            <NavBar/>
            <div className="container">
                <h1 className="text-primary"> Meu projeto Spring com React</h1>
                <DataTable/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
