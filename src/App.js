import {Container, Button} from "react-bootstrap"
import Data from "./data.json"
import './App.css'

function App() {

  const linked = (url) => {
    window.open(url)
  }

  return (
    <Container style={{ height: "100vh", background: "#add8e6" }}>
      <h1 className="text-center m-auto">Link Tree</h1>
      <Container style={{ width: "50%", marginTop: "20px" }}>
        <div className="d-grid gap-2" >
          { Data.map((datas, i) => {
            return(
              <Button variant="success" size="lg" key={i} onClick={ () => linked(datas.link) }>
                {datas.text}
              </Button>
            )  
          })}
        </div>
      </Container>
    </Container>
  );
}

export default App;
