/* eslint-disable @next/next/no-img-element */

'use client';

import { css } from 'styled-system/css';
import { HStack, Flex } from 'styled-system/jsx';
import { usePathname } from 'next/navigation';
import { Menu, Button } from '@panda-starter/ui';
import { FaCaretDown } from 'react-icons/fa';

// * Links could be separate client components

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <Flex px={10} py={6} direction='row' justify='space-between'>
      <HStack gap={6}>
        <img
          className={css({ height: '45px', _hover: { cursor: 'pointer' } })}
          src='/acme-corp.png'
          alt='Acme Logo'
        />
        {links.map(({ href, label }) => {
          const isActive = pathname === href;

          return (
            <a
              className={css({
                minW: '100px',
                py: 4,
                textAlign: 'center',
                _hover: { bg: 'blue', color: 'white' },
                bg: isActive ? 'blue.200' : 'transparent',
                borderBottom: isActive ? '2px solid blue' : 'none',
              })}
              key={href}
              href={href}
            >
              {label}
            </a>
          );
        })}
      </HStack>

      {/* Wasn't working right side isn't aligned with right end of button */}
      {/* <Menu.Root positioning={{ placement: 'bottom-end' }}> */}
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant='outline' size='md' borderColor='blue.500'>
            <HStack>
              <span>vitalik.eth</span>
              <FaCaretDown className={css({ color: 'blue.500' })} />
            </HStack>
          </Button>
        </Menu.Trigger>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.ItemGroup id='group-1'>
              <Menu.Item id='1'>Profile</Menu.Item>
              <Menu.Item id='2'>Sign Out</Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Flex>
  );
};

export default Nav;
