import React from "react";
import styled from "styled-components";

const View = styled.View`
  margin-left: 15px;
`;
const Image = styled.Image`
width: 250px
border-radius: 10px;
height: 120px;
margin-bottom: 5px;
`;

const TextHeavy = styled.Text`
  font-weight: bold;
`;

const Text = styled.Text``;

const ResultsDetail = ({ name, image_url, rating, review_count }) => {
  return (
    <View>
      <Image source={{ uri: image_url }} />
      <TextHeavy>{name}</TextHeavy>
      <Text>
        {rating} Stars, {review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultsDetail;
