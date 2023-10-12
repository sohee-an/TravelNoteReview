import { memo } from 'react';
import CardHeader from '@mui/material/CardHeader/CardHeader';

import * as Styled from './styles';
import Input from '@components/common/Input/Input';
import { Button } from '@material-ui/core';

const Register = () => {
  return (
    <Styled.Container>
      <Styled.CardStyle>
        <CardHeader style={{ color: 'gray' }} title="로그인" />
        <Styled.CardContentStyle>
          <Input variant="outlined" label="아이디" required width="25rem" />
          <Input variant="outlined" label="닉네임" required width="25rem" />
          <Input variant="outlined" label="비밀번호" required width="25rem" />
          <Input
            variant="outlined"
            label="비밀번호 확인"
            required
            width="25rem"
          />
          <Button variant="outlined">회원가입</Button>
          <Styled.ButtonGroup>
            <Button variant="outlined">카카오톡</Button>
            <Button variant="outlined">naver</Button>
            <Button variant="outlined">Google</Button>
          </Styled.ButtonGroup>
        </Styled.CardContentStyle>
      </Styled.CardStyle>
    </Styled.Container>
  );
};

export default memo(Register);
