import { BsFillHandIndexThumbFill } from "react-icons/bs";
import { Container, Content } from "./styles";
import Logo from "../../assets/img/logo.jpeg";


function Home() {
  return (
    <Container>
        <Content>
          <img src={Logo} alt="Logo" />
          <p>Clique aqui para entrar</p>
          <BsFillHandIndexThumbFill className="pulse" color="#9c3f3a" size={15} />
        </Content>
    </Container>
  )
}


export default Home;
