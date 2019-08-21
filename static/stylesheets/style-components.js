import styled from "styled-components";

const NavStyles = styled.div`
  .bigger-brand {
    font-size: 2.5rem;
  }
  .nav-font-adjust {
    font-size: 1.4rem;
  }
  .border-underlined {
    -webkit-box-shadow: 0px 6px 6px #d8d8d8;
    -moz-box-shadow: 0px 6px 6px #d8d8d8;
    box-shadow: 0px 6px 6px #d8d8d8;
  }
`;

const CardsStyles = styled.div`
  .space-between-top {
    margin-top: 50px;
  }
`;

const CartStyles = styled.div`
  .no-border-radius {
    border-radius: 0;
  }
`;



export { NavStyles, CardsStyles, CartStyles };
