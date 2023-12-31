import { Controller } from 'react-hook-form';
import { css } from 'styled-system/css';
import { Stack, HStack } from 'styled-system/jsx';
import { FaInfoCircle } from 'react-icons/fa';
import { textarea, TextareaVariantProps } from 'styled-system/recipes';
import _ from 'lodash';
import { ark } from '@ark-ui/react';
import { FormLabel, Tooltip } from '../atoms';

type TextareaProps = {
  name: string;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  registerOptions?: any;
  localForm: any;
} & TextareaVariantProps;

const Textarea = ({
  name,
  label,
  tooltip,
  placeholder,
  registerOptions,
  localForm,
  ...props
}: TextareaProps) => {
  const { control } = _.pick(localForm, ['control']);

  return (
    <Stack gap={1}>
      {label && (
        <HStack gap={1}>
          <FormLabel htmlFor={name}>{label}</FormLabel>

          {tooltip && (
            <Tooltip label={tooltip}>
              <FaInfoCircle
                className={css({ color: 'blue.200', height: '14px' })}
              />
            </Tooltip>
          )}
        </HStack>
      )}
      <Controller
        name={name}
        control={control}
        rules={registerOptions}
        render={({ field }) => (
          <ark.textarea
            className={textarea(props)}
            placeholder={placeholder}
            {...field}
          />
        )}
      />
    </Stack>
  );
};

// eslint-disable-next-line import/prefer-default-export
export { Textarea };
