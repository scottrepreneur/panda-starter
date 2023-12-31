'use client';

import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  NumberInput,
  Textarea,
  Select,
} from '@panda-starter/ui';
import React from 'react';
import { useForm } from 'react-hook-form';
import { css } from 'styled-system/css';
import { Flex, HStack } from 'styled-system/jsx';
import _ from 'lodash';

const RegisterForm = () => {
  const localForm = useForm();
  const { handleSubmit, clearErrors } = _.pick(localForm, [
    'handleSubmit',
    'clearErrors',
    // 'watch',
  ]);

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log('submitting', data);
  };

  return (
    <Card.Root w='45%' minW='450px'>
      <CardHeader>
        <h1 className={css({ fontSize: '3xl', textStyle: 'heading' })}>
          Register
        </h1>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody gap={6}>
          <Input
            name='email'
            label='Email'
            tooltip='Please use your work email to connect'
            placeholder='test@test.com'
            registerOptions={{
              required: { value: true, message: 'Email is required!' },
            }}
            localForm={localForm}
          />
          <Textarea
            name='bio'
            label='Bio'
            tooltip='Tell us about yourself'
            placeholder='Getting after it'
            localForm={localForm}
          />
          <NumberInput
            name='age'
            label='Age'
            tooltip='How old are you?'
            placeholder='15'
            localForm={localForm}
          />
          <Select
            name='country'
            label='Country'
            tooltip='testing test test'
            placeholder='Select a country'
            localForm={localForm}
            items={[
              { value: 'us', label: 'United States' },
              { value: 'ca', label: 'Canada' },
              { value: 'mx', label: 'Mexico' },
            ]}
          />
          {/*
            <Checkbox name='terms' label='Terms' localForm={localForm} />
            <RadioButton name='type' label='Type' localForm={localForm} />

            <Slider name='age' label='Age' localForm={localForm} />
            <Switch name='active' label='Active' localForm={localForm} />
            <DatePicker name='dob' label='Date of Birth' localForm={localForm} />
            <TimePicker name='time' label='Time' localForm={localForm} />
         */}
        </CardBody>
        <CardFooter>
          <Flex direction='row' justify='flex-end'>
            <HStack>
              <Button
                variant='outline'
                type='button'
                onClick={() => clearErrors()}
              >
                Cancel
              </Button>
              <Button variant='solid' type='submit'>
                Save
              </Button>
            </HStack>
          </Flex>
        </CardFooter>
      </form>
    </Card.Root>
  );
};

export default RegisterForm;
