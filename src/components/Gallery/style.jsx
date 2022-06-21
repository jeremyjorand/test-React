import styled from 'styled-components';

export default styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap');
  font-family: 'Nunito', sans-serif;
  width: 80vw;
  margin: auto;
  h1 {
    font-size: 5rem;
    margin: 3rem 0;
  }
  .input {
    display: flex;
    justify-content: center;

    .contain {
      width: 80vw;
      display: flex;
      justify-content: space-between;
    }

    input {
      width: 80vw;
      height: 4rem;
      border-radius: 2rem 0 0 2rem;
      font-size: 1.5rem;
      border: gray 1px solid;
      padding-left: 1.5rem;
    }
    button {
      background-color: green;
      color: white;
      width: 8vw;
      border-radius: 0 2rem 2rem 0;
      font-size: 1.5rem;
    }
  }
  .card {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
