import React from "react";
import device from "./Device";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin-bottom: 20px;

  @media ${device.tabPort} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Video = styled.iframe`
  height: 20rem;
  width: 100%;

  @media ${device.tabPort} {
    width: 80%;
  }
  @media ${device.phone} {
    width: 100%;
  }
`;
const Title = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const Videos = ({ videos }) => (
  <Container>
    <Title>Teasers</Title>

    <VideoContainer>
      {videos.length > 0 &&
        videos.map((video, index) => {
          if (index < 2) {
            return (
              <Video
                key={index}
                src={`https://www.youtube.com/embed/${video.key}`}
                controls
                frameborder="0"
                allowfullscreen
              />
            );
          }
        })}
    </VideoContainer>
  </Container>
);

export default Videos;
