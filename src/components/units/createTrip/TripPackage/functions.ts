import L from 'lodash';
import { InitialValue, MemberFormType } from './constants';
export const getInitialFormValues = (item?: any): MemberFormType => {
  if (!item || L.isEmpty(item)) {
    return InitialValue;
  }

  const { title, desc, tripArea, tripDate, disclosure } = item;

  return {
    title,
    desc,
    tripArea,
    tripDate,
    disclosure,
  };
};
