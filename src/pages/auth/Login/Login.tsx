import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import * as Styled from './styles';
import Input from '@/components/common/Input/Input';
import { getLoginFormSchema } from '@/validatrions/authentication/loginFormValidation';

const Login = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: getLoginFormSchema() });

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleClick = (values: any) => {
    if (values) {
      console.log('value', values);
      const { email, nickname, password } = values;
      const newUser = {
        email,
        nickname,
        password,
      };
    }
  };

  return (
    <Styled.Container>
      <Styled.CardStyle>
        <CardHeader style={{ color: 'gray' }} title="로그인" />
        <Styled.CardContentStyle>
          <Input
            variant="outlined"
            label="아이디"
            required
            width="26rem"
            id="email"
            name="email"
            placeholder="아이디를 입력해주세요"
            type="email"
            error={!!errors?.email}
            helperText={errors?.email ? errors?.email.message : ''}
            onChange={handleChange}
          />
          <Input
            variant="outlined"
            label="비밀번호"
            required
            width="26rem"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            error={!!errors?.password}
            helperText={errors?.password ? errors?.password.message : ''}
            onChange={handleChange}
          />
          <Button
            variant="outlined"
            type="submit"
            onClick={handleSubmit(handleClick)}
          >
            로그인
          </Button>
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

export default memo(Login);
