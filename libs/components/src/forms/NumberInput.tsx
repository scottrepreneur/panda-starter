import { NumberInput as ArkNumberInput } from '@ark-ui/react/number-input';
import { styled, type HTMLStyledProps, HStack, Stack } from 'styled-system/jsx';
import { numberInput } from 'styled-system/recipes';
import { css } from 'styled-system/css';
import { FaInfoCircle, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Controller, RegisterOptions, UseFormReturn } from 'react-hook-form';
import _ from 'lodash';
import { FormLabel, Tooltip } from '../atoms';
import { createStyleContext } from '../lib/create-style-context';

const { withProvider, withContext } = createStyleContext(numberInput);

const NumberInputRoot = withProvider(styled(ArkNumberInput.Root), 'root');
const NumberInputControl = withContext(
  styled(ArkNumberInput.Control),
  'control',
);
const NumberInputDecrementTrigger = withContext(
  styled(ArkNumberInput.DecrementTrigger),
  'decrementTrigger',
);
const NumberInputIncrementTrigger = withContext(
  styled(ArkNumberInput.IncrementTrigger),
  'incrementTrigger',
);
const NumberInputInput = withContext(styled(ArkNumberInput.Input), 'input');
// const NumberInputLabel = withContext(styled(ArkNumberInput.Label), 'label');
// const NumberInputScrubber = withContext(
//   styled(ArkNumberInput.Scrubber),
//   'scrubber',
// );

export interface NumberInputProps
  extends HTMLStyledProps<typeof NumberInputRoot> {
  name: string;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  registerOptions?: RegisterOptions;
  localForm: UseFormReturn<any>;
}

export const NumberInput = ({
  name,
  label,
  tooltip,
  placeholder,
  registerOptions,
  localForm,
}: NumberInputProps) => {
  const { control } = _.pick(localForm, ['control']);

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      render={({ field: { onChange, onBlur, value } }) => (
        <NumberInputRoot
          min={0}
          name={name}
          onValueChange={(details) => {
            onChange(details.valueAsNumber);
          }}
          onBlur={onBlur}
          value={value}
        >
          {/* <NumberInputScrubber /> */}
          <Stack gap={1}>
            {label && (
              <HStack gap={1}>
                <FormLabel>{label}</FormLabel>
                {tooltip && (
                  <Tooltip label={tooltip}>
                    <FaInfoCircle
                      className={css({ color: 'blue.200', height: '14px' })}
                    />
                  </Tooltip>
                )}
              </HStack>
            )}

            <NumberInputControl>
              <NumberInputInput placeholder={placeholder} />
              <NumberInputIncrementTrigger>
                <FaChevronUp />
              </NumberInputIncrementTrigger>
              <NumberInputDecrementTrigger>
                <FaChevronDown />
              </NumberInputDecrementTrigger>
            </NumberInputControl>
          </Stack>
        </NumberInputRoot>
      )}
    />
  );
};

// export interface NumberInputProps
//   extends HTMLStyledProps<typeof NumberInputRoot> {}
