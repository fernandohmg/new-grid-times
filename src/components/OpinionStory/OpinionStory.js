import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Anchor href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Anchor>
  );
};

const Anchor = styled.a`
  &:not(:last-of-type) {
    border-bottom: 1px solid ${COLORS.gray[300]};
    padding-bottom: 16px;
    margin-bottom: 16px;

    @media ${QUERIES.tabletAndUp} {
      border-bottom: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    @media ${QUERIES.desktopAndUp} {
      border-bottom: 1px solid ${COLORS.gray[300]};
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    justify-content: flex-start;
  }

  @media ${QUERIES.desktopAndUp} {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: auto;

  @media ${QUERIES.tabletAndUp} {
    margin-left: 0;
  }
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
