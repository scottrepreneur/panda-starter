import { ark } from '@ark-ui/react/factory';
import { styled, type HTMLStyledProps } from 'styled-system/jsx';
import { card } from 'styled-system/recipes';
import { createStyleContext } from '../lib/create-style-context';

const { withProvider, withContext } = createStyleContext(card);

const CardRoot = withProvider(styled(ark.div), 'root');
const CardBody = withContext(styled(ark.div), 'body');
const CardDescription = withContext(styled(ark.p), 'description');
const CardFooter = withContext(styled(ark.div), 'footer');
const CardHeader = withContext(styled(ark.div), 'header');
const CardTitle = withContext(styled(ark.h3), 'title');

const Card = {
  Root: CardRoot,
  Body: CardBody,
  Description: CardDescription,
  Footer: CardFooter,
  Header: CardHeader,
  Title: CardTitle,
};

export { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle };

export interface CardProps extends HTMLStyledProps<typeof CardRoot> {}
export interface CardBodyProps extends HTMLStyledProps<typeof CardBody> {}
export interface CardDescriptionProps
  extends HTMLStyledProps<typeof CardDescription> {}
export interface CardFooterProps extends HTMLStyledProps<typeof CardFooter> {}
export interface CardHeaderProps extends HTMLStyledProps<typeof CardHeader> {}
export interface CardTitleProps extends HTMLStyledProps<typeof CardTitle> {}
