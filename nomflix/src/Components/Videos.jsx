import React from "react";

import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const VideoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 10px;
  margin-bottom: 20px;
`;
const Video = styled.iframe`
  height: 200px;
  width: 320px;
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
