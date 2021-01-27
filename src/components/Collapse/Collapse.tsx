import React, { PureComponent } from 'react';
import Icon from "../Icon";
import { ICON_COLOR } from "../../constants";
import styled from "styled-components";
import { Subject } from "../Typography";


export interface CollapseProps {
    onToggleClick: () => void;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px 0;
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

const Btn = styled.button`
  display: flex;
  align-items: center;  
  border: none;
  background-color: transparent;
  outline: none;

  .collapse & {
    transform: rotate(180deg);
  }
`;

const CollapseSubject = styled(Subject)`
  display: inline-block;
  padding-left: 24px;

  .collapse & {
    display: none;
  }
`;

export default class Collapse extends PureComponent<CollapseProps> {
    render() {

        const {
            onToggleClick
        } = this.props;

        return (
            <Wrapper onClick={onToggleClick}>
                <Btn>
                    <Icon
                        name={'chevron-left'}
                        color={ICON_COLOR}
                        size={20}
                    />
                    <CollapseSubject>
                        Collapse
                    </CollapseSubject>
                </Btn>
            </Wrapper>
        )
    }
}