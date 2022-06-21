import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-wrap: wrap;

  .contain {
    margin: 5rem;
    width: 15vw;
    height: 20rem;
    border: 1px black solid;
    overflow: auto;
    img {
      margin: 1.5rem 5rem;
    }
    h2 {
      border-top: 1px black solid;
      padding-top: 1rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;
    }
    p {
      margin: 0.5rem 1rem;
    }
  }
`;
