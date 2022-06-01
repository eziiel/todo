import styled from "styled-components"
import bgDesktopDark from "../../images/bg-desktop-dark.jpg"
import bgMobileDark from "../../images/bg-mobile-dark.jpg"


function pixelsToRem (...values) {
  return values
      .reduce((a,i) => (a += i/16 + `rem `),"")
      .trim();
}

const BackgroundDesktop = styled.div`

width: 100% ;
height: ${pixelsToRem(300)};
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