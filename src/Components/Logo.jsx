import logoIMG from "../images/Mee-crop.png"
import styled from 'styled-components'

const Logo = styled.img({
  marginBottom: "2rem",
  maxHeight: props => props.figHeight || "8rem",
  backgroundColor: props => props.backgr || "transparent",
})

// backgroundColor: "transparent",

Logo.defaultProps = {
  src: logoIMG,
  alt: "Vivianne's Icon",
};


export default Logo

// const Logo = styled.img`
//   maxHeight: ${(props) => props.figHeight ? props.figHeight : "6rem"},
//   marginBottom: "3rem",
// `


