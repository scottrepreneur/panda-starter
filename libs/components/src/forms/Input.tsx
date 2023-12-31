import { InputHTMLAttributes } from 'react';
import { input } from 'styled-system/recipes';
import { css } from 'styled-system/css';
import { Stack, HStack } from 'styled-system/jsx';
import type { InputVariantProps } from 'styled-system/recipes';
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form';
import _ from 'lodash';
import { FaInfoCircle } from 'react-icons/fa';

import { Tooltip, FormLabel } from '../atoms';

type CustomInputProps = {
  name: string;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions;
  localForm?: UseFormReturn<any>;
} & InputVariantProps;

export type InputProps = CustomInputProps &
  InputVariantProps &
  InputHTMLAttributes<any>;

export const Input = ({
  name,
  label,
  tooltip,
  registerOptions,
  localForm,
  ...props
}: InputProps) => {
  const styleProps = _.pick(props, ['visual', 'size']);
  // const tooltipProps = _.pick(props, ['isOpen', 'lazyMount', 'unmountOnExit']);
  const { formState, control } = _.pick(localForm, ['formState', 'control']);

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      render={({ field: { value, ...field } }) => (
        <Stack gap={1}>
          {label && (
            <HStack gap={1}>
              <FormLabel htmlFor={name} size='sm'>
                {label}
              </FormLabel>
              {tooltip && (
                <Tooltip label={tooltip}>
                  <FaInfoCircle
                    className={css({ color: 'blue.200', height: '14px' })}
                  />
                </Tooltip>
              )}
            </HStack>
          )}
          <input
            className={input(styleProps)}
            {...field}
            // complains about controlled if value is initialized to undefined
            value={value || ''}
            {...props}
          />
          {formState?.errors[name] && (
            <span className={css({ color: 'red.500', fontSize: 'small' })}>
              {formState.errors[name]?.message as string}
            </span>
          )}
        </Stack>
      )}
    />
  );
};
