import styled from 'styled-components';

export default styled.div`
  .contain {
    margin: 3rem 1.5rem;
    width: 20rem;
    height: 26rem;
    border: 1px gray solid;
    overflow: auto;
    list-style: none;
    display: flex;
    flex-direction: column;
    .image {
      height: 16rem;
      margin: auto;
    }
    h2 {
      border-top: 1px gray solid;
      padding-top: 1rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.8rem;
    }
    h4 {
      text-align: center;
    }
    .director,
    .years {
      display: flex;
    }
    .logo {
      width: 1rem;
      margin-left: 1rem;
    }
    p {
      margin: 0.5rem;
    }
    .description {
      margin: 0.5rem 1rem;
    }
  }
`;
