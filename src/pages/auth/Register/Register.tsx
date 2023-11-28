import { memo } from 'react';
import { useForm } from 'react-hook-form';
import Input from '@components/common/Input/Input';
import { Button } from '@material-ui/core';
import CardHeader from '@mui/material/CardHeader/CardHeader';
import { useMutation } from '@tanstack/react-query';
import * as Styled from './styles';
import { AuthApi } from '@/api/auth/auth';
import { getRegusterFormSchema } from '@/validatrions/authentication/registerFormValidation';

const Register = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: getRegusterFormSchema() });

  const { mutate } = useMutation({ mutationFn: AuthApi.registerApi });

  const handleChange = ({ name, value }: any) => {
    setValue(name, value, { shouldValidate: true });
  };

  const handleClick = (values: any) => {
    if (values) {
      const { email, nickname, password } = values;
      const newUser = {
        email,
        nickname,
        password,
      };
      mutate({ newUser });
    }
  };

  return (
    <Styled.Container>
      <Styled.CardStyle>
        <CardHeader style={{ color: 'gray' }} title="회원가입" />
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
            label="닉네임"
            required
            width="26rem"
            id="nickname"
            name="nickname"
            placeholder="닉네임을 입력해주세요"
            error={!!errors?.nickname}
            helperText={errors?.nickname ? errors?.nickname.message : ''}
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
          <Input
            variant="outlined"
            label="비밀번호 확인"
            required
            id="passwordConfirm"
            name="passwordConfirm"
            width="26rem"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            error={!!errors.passwordConfirm}
            helperText={
              errors.passwordConfirm ? errors.passwordConfirm.message : ''
            }
            onChange={handleChange}
          />
          <Styled.RegisterButton
            variant="outlined"
            type="submit"
            onClick={handleSubmit(handleClick)}
          >
            회원가입
          </Styled.RegisterButton>
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
