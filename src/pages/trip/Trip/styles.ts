import styled from '@emotion/styled';
import Input from '@components/common/Input/Input';

export const Container = styled.div`
  width: 100%;
  height: 25%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5%;
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;
`;
export const TravelImgWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 16px;

  & > img {
    max-width: calc(33.33% - 16px);
    margin-bottom: 16px;
  }
`;

export const TravelImgContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Img = styled.img`
  cursor: pointer;
`;
export const SearchInputWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const ImgSearchInput = styled(Input)`
  width: 100%;
`;
