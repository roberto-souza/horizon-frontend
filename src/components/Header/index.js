import React from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';

import { Container, Content, Profile } from './styles';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt="Logo"
          />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Link to="/configurations">
            <FaCog color="#ffffff" size={18} />
          </Link>
          <Profile>
            <div>
              <strong>Roberto Souza</strong>
              <Link to="/profile">MEU PERFIL</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
