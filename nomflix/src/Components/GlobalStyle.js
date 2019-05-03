import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import device from "./Device";

const globalstyles = createGlobalStyle`
${reset};
a{
  text-decoration:none;
  color:inherit;
}
*{
  box-sizing:border-box;
}
html{
  font-size:62.5%; 
  @media ${device.tabLand}{
    font-size:56.25%;
  }
  @media ${device.tabPort}{
    font-size:50%;
  }
  @media ${device.phone}{
    font-size:50%;
  }
  @media ${device.bigDesktop}{
    font-size:75%;
  }

}
body{
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  background-color:rgba(20,20,20,1);
  color:white;
  padding-top:50px;
 
}

`;
export default globalstyles;
