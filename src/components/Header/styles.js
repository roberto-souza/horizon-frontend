import styled from 'styled-components';

export const Container = styled.div`
  background: #2b3136;
  color: #ffffff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      color: #ffffff;
      font-weight: bold;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
    }

    a {
      color: #ffffff;
      display: block;
      margin-top: 2px;
      font-size: 12px;
    }
  }

  img {
    height: 40px;
    width: 40px;
    border: 2px solid #eee;
    border-radius: 50%;
  }
`;
