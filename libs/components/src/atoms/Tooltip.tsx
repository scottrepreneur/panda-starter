import { Tooltip as ArkTooltip } from '@ark-ui/react/tooltip';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';
import { tooltip } from 'styled-system/recipes';
import { ReactNode } from 'react';
import { createStyleContext } from '../lib/create-style-context';

const { withProvider, withContext } = createStyleContext(tooltip);

const TooltipRoot = withProvider(ArkTooltip.Root);
const TooltipArrow = withContext(styled(ArkTooltip.Arrow), 'arrow');
const TooltipArrowTip = withContext(styled(ArkTooltip.ArrowTip), 'arrowTip');
const TooltipContent = withContext(styled(ArkTooltip.Content), 'content');
const TooltipPositioner = withContext(
  styled(ArkTooltip.Positioner),
  'positioner',
);
const TooltipTrigger = withContext(styled(ArkTooltip.Trigger), 'trigger');

export type TooltipProps = {
  label: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  hasArrow?: boolean;
  children: ReactNode;
} & HTMLStyledProps<typeof TooltipRoot>;

const Tooltip = ({
  label,
  placement = 'right',
  hasArrow,
  children,
}: TooltipProps) => (
  <TooltipRoot closeDelay={0} openDelay={0} positioning={{ placement }}>
    <TooltipTrigger asChild>{children}</TooltipTrigger>
    <TooltipPositioner>
      <TooltipContent bg='blue.200' color='black' zIndex={5}>
        {hasArrow && (
          <TooltipArrow>
            <TooltipArrowTip />
          </TooltipArrow>
        )}
        {label}
      </TooltipContent>
    </TooltipPositioner>
  </TooltipRoot>
);

export {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipRoot,
  TooltipTrigger,
};

export interface TooltipRootProps extends HTMLStyledProps<typeof TooltipRoot> {}
export interface TooltipArrowProps
  extends HTMLStyledProps<typeof TooltipArrow> {}
export interface TooltipArrowTipProps
  extends HTMLStyledProps<typeof TooltipArrowTip> {}
export interface TooltipContentProps
  extends HTMLStyledProps<typeof TooltipContent> {}
export interface TooltipPositionerProps
  extends HTMLStyledProps<typeof TooltipPositioner> {}
export interface TooltipTriggerProps
  extends HTMLStyledProps<typeof TooltipTrigger> {}
