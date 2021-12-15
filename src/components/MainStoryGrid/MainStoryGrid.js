import React from "react";
import styled from "styled-components/macro";
import { COLORS, QUERIES } from "../../constants";
import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "../../data";
import Advertisement from "../Advertisement";
import MainStory from "../MainStory";
import OpinionStory from "../OpinionStory";
import SecondaryStory from "../SecondaryStory";
import SectionTitle from "../SectionTitle";

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList opinion>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "main-story"
    "secondary-stories"
    "opinion-stories"
    "advertisement";
  gap: 48px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    gap: 16px;
    grid-template-columns: 2fr 1fr;
    grid-template-areas:
      "main-story secondary-stories"
      "advertisement advertisement"
      "opinion-stories opinion-stories";
  }

  @media ${QUERIES.desktopAndUp} {
    gap: 16px;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      "main-story secondary-stories opinion-stories"
      "main-story advertisement advertisement";
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp} {
    border-right: 1px solid ${COLORS.gray[300]};
    padding-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.opinion &&
    `@media ${QUERIES.tabletAndUp} {
      flex-direction: row;
      gap: 32px;
    }

    @media ${QUERIES.desktopAndUp} {
      flex-direction: column;
      gap: 0;
    }
    `}
`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.desktopAndUp} {
    border-left: 1px solid ${COLORS.gray[300]};
    padding-left: 16px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.desktopAndUp} {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
    margin-top: 16px;
  }
`;

export default MainStoryGrid;
