import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const getCreateTripSchema = () =>
  yupResolver(
    yup.object({
      title: yup.string().required('여행패키지 제목을 입력해주세요.'),

      desc: yup.string().required('여행패키지 설명을 입력해주세요.'),

      tripArea: yup.array().of(yup.string()).min(1, '장소를 선택해주세요'),

      startday: yup.string().required('여행 날짜를 선택해주세요'),
      endday: yup.string().required('여행 날짜를 선택해주세요'),
      disclosure: yup.boolean(),
    })
  );
