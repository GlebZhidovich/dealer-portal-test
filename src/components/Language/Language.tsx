import React, { PureComponent } from 'react';
import styled from "styled-components";
import { Subject } from "../Typography";
import { LANGUAGE_LABELS } from "../../constants";

export interface ProfileProps {

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

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;  
  margin-right: 16px;
  font-weight: 500;
  font-size: 11px;
  line-height: 28px;
  color: #ffffff;
  border: none;
  background-color: transparent;
  outline: none;

  .collapse & {
    margin-right: 0;
  }
`;

const LangSubject = styled(Subject)`
  .collapse & {
    display: none;
  }
`;

export default class Language extends PureComponent<ProfileProps> {
    render() {

        const {} = this.props;

        return (
            <Wrapper>
                <Btn>
                    {LANGUAGE_LABELS.en}
                </Btn>
                <LangSubject>
                    Select language
                </LangSubject>
            </Wrapper>
        )
    }
}