import { Box, Container, Content} from "./styles";
import Logo from "../../assets/img/logo3.png";

function OrderType() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Content>
        <Box>
          <h3 className="option1">Comer aqui</h3>
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100" height="100" 
              viewBox="0 0 512 512">
              <title>ionicons-v5-p</title>
              <path d="M342.7,223.94h14.87a79.48,79.48,0,0,0,56.58-23.44L496,118,473.78,95.6,390.2,179.18l-17.37-17.37,83.58-83.59-23-22.31-83.27,83.26L332.82,121.8,416.4,38.21,394,16,311.5,97.85a79.49,79.49,0,0,0-23.44,56.59V169.3l-43.13,43.13L48,16C3.72,70.87,29.87,171.71,79.72,221.57l85.5,85.5c26.55,26.55,31.82,28.92,61.94,16.8,6.49-2.61,8.85-2.32,14.9,3.72l13,12.13c2.93,3,3,3.88,3,9.62v5.54c0,21.08,13.48,33.2,22.36,42.24L384,496l72-72L299.57,267.07Z" fill="#FFF" />
              <path d="M227.37,354.59c-29.82,6.11-48.11,11.74-83.08-23.23-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16,416l80,80L240,352Z" fill="#FFF" />
            </svg>
        </Box>
        <Box>
          <h3 className="option2">Ou levar</h3>
          <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100" height="100" 
              fill="currentColor" 
              className="bi bi-house-door-fill" 
              viewBox="0 0 16 16"> 
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" fill="#FFF"/> 
            </svg>
        </Box>
      </Content>
    </Container>
  )
}


export default OrderType;