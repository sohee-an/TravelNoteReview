import { Fragment, useEffect, useState } from 'react';

import str from '@/utils/str';
import { TextField } from '@material-ui/core';

type Props = {
  type?: 'text' | 'password' | 'number' | 'email' | 'search';
  name?: string;
  value?: string;
  maxLength?: number;
  invalid?: boolean;
  onChange?: (e: object) => void;
  [key: string]: any;
  label?: string;
  variant?: 'standard' | 'filled' | 'outlined' | undefined;
};

function Input({
  type = 'text',
  name = str.random(),
  value = '',
  maxLength = -1,
  invalid,
  onChange,
  ...args
}: Props) {
  const [text, setText] = useState<string>(value);

  const handleTextChange = (content: string | number) => {
    content = content.toString();

    if (text !== content) {
      setText(content);
      onChange && onChange({ name, value: content });
    }
  };

  /**
   * useEffect
   */
  const update = () => {
    if (value !== undefined) setText(value);
  };
  useEffect(update, [value]);

  return (
    <Fragment>
      <TextField
        type={type}
        name={name}
        value={text}
        error={invalid}
        {...(maxLength > -1 ? { maxLength } : {})}
        onChange={({ target }: any) =>
          handleTextChange(target.value.toString())
        }
        {...args}
      />
    </Fragment>
  );
}

export default Input;