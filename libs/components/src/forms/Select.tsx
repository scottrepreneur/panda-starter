import { Select as ArkSelect } from '@ark-ui/react/select';
import { styled, type HTMLStyledProps, HStack } from 'styled-system/jsx';
import { select } from 'styled-system/recipes';
import { css } from 'styled-system/css';
import { Controller } from 'react-hook-form';
import _ from 'lodash';
import { FaCheck, FaChevronDown, FaInfoCircle } from 'react-icons/fa';
import { createStyleContext } from '../lib/create-style-context';
import { FormLabel, Tooltip } from '../atoms';

const { withProvider, withContext } = createStyleContext(select);

const SelectRoot = withProvider(styled(ArkSelect.Root), 'root');
const SelectClearTrigger = withContext(
  styled(ArkSelect.ClearTrigger),
  'clearTrigger',
);
const SelectContent = withContext(styled(ArkSelect.Content), 'content');
const SelectControl = withContext(styled(ArkSelect.Control), 'control');
const SelectIndicator = withContext(styled(ArkSelect.Indicator), 'indicator');
const SelectItem = withContext(styled(ArkSelect.Item), 'item');
const SelectItemGroup = withContext(styled(ArkSelect.ItemGroup), 'itemGroup');
const SelectItemGroupLabel = withContext(
  styled(ArkSelect.ItemGroupLabel),
  'itemGroupLabel',
);
const SelectItemIndicator = withContext(
  styled(ArkSelect.ItemIndicator),
  'itemIndicator',
);
const SelectItemText = withContext(styled(ArkSelect.ItemText), 'itemText');
const SelectLabel = withContext(styled(ArkSelect.Label), 'label');
const SelectPositioner = withContext(
  styled(ArkSelect.Positioner),
  'positioner',
);
const SelectTrigger = withContext(styled(ArkSelect.Trigger), 'trigger');
const SelectValueText = withContext(styled(ArkSelect.ValueText), 'valueText');

export type SelectProps = {
  name: string;
  label?: string;
  tooltip?: string;
  placeholder?: string;
  registerOptions?: any;
  localForm: any;
  items: any[];
} & HTMLStyledProps<typeof SelectRoot>;

const Select = ({
  name,
  label,
  placeholder,
  tooltip,
  registerOptions,
  localForm,
  items,
  ...props
}: SelectProps) => {
  const { control } = _.pick(localForm, ['control']);

  if (_.isEmpty(items)) return null;

  return (
    <Controller
      name={name}
      control={control}
      rules={registerOptions}
      render={({ field: { onChange, onBlur, value } }) => (
        <SelectRoot
          {...props}
          onValueChange={(details) => {
            onChange(_.first(_.get(details, 'items')));
          }}
          onBlur={onBlur}
          value={value}
          items={items}
          positioning={{ sameWidth: true }}
        >
          {label && (
            <HStack>
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

          <SelectControl>
            <SelectTrigger>
              <SelectValueText color={value ? 'inherit' : 'whiteAlpha.600'}>
                {value?.label || placeholder}
              </SelectValueText>
              <FaChevronDown />
            </SelectTrigger>
          </SelectControl>
          <SelectPositioner w='100%'>
            <SelectContent width='100%'>
              {items.map((item) => (
                <SelectItem key={item.value} item={item}>
                  <SelectItemText>{item.label}</SelectItemText>
                  <SelectItemIndicator>
                    <FaCheck />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectContent>
          </SelectPositioner>
        </SelectRoot>
      )}
    />
  );
};

export {
  Select,
  SelectClearTrigger,
  SelectContent,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
};

export interface SelectRootProps extends HTMLStyledProps<typeof SelectRoot> {}
export interface SelectClearTriggerProps
  extends HTMLStyledProps<typeof SelectClearTrigger> {}
export interface SelectContentProps
  extends HTMLStyledProps<typeof SelectContent> {}
export interface SelectControlProps
  extends HTMLStyledProps<typeof SelectControl> {}
export interface SelectIndicatorProps
  extends HTMLStyledProps<typeof SelectIndicator> {}
export interface SelectItemProps extends HTMLStyledProps<typeof SelectItem> {}
export interface SelectItemGroupProps
  extends HTMLStyledProps<typeof SelectItemGroup> {}
export interface SelectItemGroupLabelProps
  extends HTMLStyledProps<typeof SelectItemGroupLabel> {}
export interface SelectItemIndicatorProps
  extends HTMLStyledProps<typeof SelectItemIndicator> {}
export interface SelectItemTextProps
  extends HTMLStyledProps<typeof SelectItemText> {}
export interface SelectLabelProps extends HTMLStyledProps<typeof SelectLabel> {}
export interface SelectPositionerProps
  extends HTMLStyledProps<typeof SelectPositioner> {}
export interface SelectTriggerProps
  extends HTMLStyledProps<typeof SelectTrigger> {}
export interface SelectValueTextProps
  extends HTMLStyledProps<typeof SelectValueText> {}
