import styled from "styled-components"
import bgDesktopDark from "../../images/bg-desktop-dark.jpg"
import bgMobileDark from "../../images/bg-mobile-dark.jpg"


function pixelConfig(item) {
  item = item/16 + "rem"
  return item
}

const BackgroundDesktop = styled.div`

width: 100% ;
height: ${pixelConfig(300)};
background: var(--dark-blue) url(${bgDesktopDark}) top no-repeat;
background-size: cover;



@media (max-width: 400px) {
  width: 100%;
  height: 373px;

  background: transparent url(${bgMobileDark}) top no-repeat;
  background-size: cover;
  
}
`

export { BackgroundDesktop }