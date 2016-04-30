import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../components/Button';
import ContrastAwareText from '../components/ContrastAwareText';
import ColorInput from '../components/ColorInput';
import './typography.scss';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={ action('button clicked') }>Hello</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });

storiesOf('ColorInput', module)
  .add('default view', () => (
    <ColorInput />
  ));

storiesOf('ContrastAwareText', module)
  .add('dark on light', () => (
    <div style={{ backgroundColor: '#fefefe', padding: '10' }}>
      <ContrastAwareText origBackgroundColor="#fefefe">
        Can we all just agree as the greater design community to stop
        fucking talking about Comic Sans altogether?
      </ContrastAwareText>
    </div>
  ))
  .add('light on dark', () => (
    <div style={{ backgroundColor: '#343436', padding: '10' }}>
      <ContrastAwareText origBackgroundColor="#343436">
        Can we all just agree as the greater design community to stop
        fucking talking about Comic Sans altogether?
      </ContrastAwareText>
    </div>
  ));
