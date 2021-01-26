import React from 'react';
import Icons from '../../assets/images/icons.svg';
import styled from 'styled-components';
import { IconPropTypes } from './types';
import { palette } from '../../themes/palette';

const Container = styled.svg<IconPropTypes>`
  display: inline-block;
  vertical-align: middle;
`;

export default class Icon extends React.PureComponent<IconPropTypes> {
  ref?: HTMLElement;
  
  static defaultProps = {
    name: 'search',
    color: 'currentColor',
    size: 24,
  };

  render() {
    const {
      name,
      color,
      size,
    } = this.props;

    return (
      <Container fill={color} width={size} height={size}>
        <use xlinkHref={`${Icons}#icon-${name}`} />
      </Container>
    );
  }
}
