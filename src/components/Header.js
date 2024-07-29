import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="Logo" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="icon" />
          <span>HOME</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" alt="icon" />
          <span>SEACH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" alt="icon" />
          <span>WATCH LIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="icon" />
          <span>ORIGINAL</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" alt="icon" />
          <span>MOVIES</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" alt="icon" />
          <span>SERIES</span>
        </a>
      </NavMenu>

      <UserImage
        src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/369270839_3484210311866364_8419207299915699708_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeH2z9jLHIFQJlRLqmnB_VCbxM-ev0hgNyrEz56_SGA3KoVi0BRm2OAQ5VXS1rzG2THHDWZ6KsLV4xpxNzn5coL-&_nc_ohc=_WMvACNQDPQQ7kNvgF9rL6Q&_nc_ht=scontent.fsgn8-3.fna&oh=00_AYDC6l47-fmQP8GOWGX0vwFvM8WjqZmLcnL7usq2RJxfaw&oe=66AD3A64"
        alt="User"
      />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  height: 100%;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 20px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 26px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.43px;
      position: relative;

      &::after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transform-origin: left center;
        transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.92) 0s;
      }
    }

    &:hover {
      span::after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
