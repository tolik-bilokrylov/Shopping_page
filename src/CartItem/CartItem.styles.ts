import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;

  .cartitem {
    flex: 1;
  }

  .cartitem__information,
  .cartitem__buttons {
    display: flex;
    justify-content: space-between;
  }

  .cartitem__img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }
`;