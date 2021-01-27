import React, { PureComponent } from 'react';
import Avatar from "../Avatar";
import Icon from "../Icon";
import { ICON_COLOR } from "../../constants";
import styled from "styled-components";
import { Subject } from "../Typography";


export interface ProfileProps {
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .collapse & {
    flex-direction: column;    
  }
`;

const ProfileTitle = styled(Subject)`
  padding-left: 12px;

  .collapse & {
    display: none;
  }
`;

const ProfileAvatar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 5px 8px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #254A5D;
  }

  .collapse & {
    justify-content: center;
    padding: 0;
    margin: 5px 0;

    &:hover {
      background-color: transparent;
    }
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  border-radius: 3px;
  
  &:hover {    
    background-color: #254A5D;
  }

  .collapse & {
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export default class Profile extends PureComponent<ProfileProps> {
    render() {

        const {
        } = this.props;

        return (
            <Wrapper>
                <ProfileAvatar>
                    <Avatar/>
                    <ProfileTitle>
                        Profile
                    </ProfileTitle>
                </ProfileAvatar>
                <IconWrap>
                    <Icon
                        name={'exit'}
                        color={ICON_COLOR}
                    />
                </IconWrap>
            </Wrapper>
        )
    }
}