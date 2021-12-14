import React from "react";
import { Menu, Search, User } from "react-feather";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import Button from "../Button";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <MainHeaderActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </MainHeaderActionGroup>
        <Logo />
        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <a href="">Already a subscriber?</a>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeaderActionGroup = styled.div`
  display: none;
  flex: 1;
  gap: 24px;

  svg {
    display: block;
  }

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`;

const SubscribeWrapper = styled.div`
  display: none;
  flex-direction: column;
  flex: 1;
  align-items: end;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

export default Header;
