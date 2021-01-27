import React, { PureComponent } from 'react';
import Icon from "../Icon";
import { ICON_COLOR } from "../../constants";
import styled from "styled-components";
import { Subject } from "../Typography";


export interface HelpProps {
    onClick: () => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 12px;
  border-radius: 3px;
  cursor: pointer;

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

const HelpSubject = styled(Subject)`
  display: inline-block;
  padding-left: 24px;

  .collapse & {
   display: none;
  }
`;

export default class Help extends PureComponent<HelpProps> {
    render() {

        const { onClick } = this.props;

        return (
            <Wrapper onClick={onClick}>
                <Icon
                    name={'help'}
                    color={ICON_COLOR}
                />
                <HelpSubject>
                    Help
                </HelpSubject>
            </Wrapper>
        )
    }
}