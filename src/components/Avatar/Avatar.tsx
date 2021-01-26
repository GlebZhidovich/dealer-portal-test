import React from 'react';
import { AvatarPropTypes } from './types';
import styled from 'styled-components';
import { ReactComponent as DefaultAvatar } from '../../assets/images/default-avatar.svg';

interface ContainerProps {
  size?: number;
  onClick?: () => void;
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.theme.avatar.background};
  width: ${props => props.size ? props.size : 32}px;
  height: ${props => props.size ? props.size : 32}px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  svg {
    & path {
      fill: ${props => props.theme.avatar.color};
    }
    & g {
      fill: ${props => props.theme.avatar.background};
    }
  }
`;

interface ImageProps {
  src?: string,
  size?: number
}

const Image = styled.span<ImageProps>`
  background-color: ${props => props.theme.avatar.background};
  background-image: ${props => props.src ? `url(${props.src})` : undefined};
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
`;

export default class Avatar extends React.PureComponent<AvatarPropTypes> {
  ref?: HTMLElement;

  static defaultProps = {
    size: 32,
  };

  render() {
    const {
      name,
      src,
      size,
      onClick,
    } = this.props;
    return (
      <Container size={size} onClick={onClick}>
        <DefaultAvatar />
        {src && (
          <Image
            src={src}
            size={size}
            role="img"
            aria-label={name}
          />
        )}
      </Container>
    )
  }
}
