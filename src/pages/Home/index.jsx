import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Content } from "./styles";
import Logo from "../../assets/img/logo.jpeg";


function Home() {
  return (
    <Link to="/order-type">
        <Container>
          <Content>
            <img src={Logo} alt="Logo" />
            <p>Clique aqui para entrar</p>
            <BsFillHandIndexThumbFill className="pulse" color="#9c3f3a" size={15} />
          </Content>
      </Container>
    </Link>
  )
}


export default Home;
