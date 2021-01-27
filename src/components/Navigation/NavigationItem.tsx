import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Icon from "../Icon";
import { NavLink } from "react-router-dom";
import { ICON_COLOR, ROUTES } from "../../constants";
import { Subject } from "../Typography";

export interface ItemProps {
    label: string,
    to: ROUTES,
    iconName: string
}

const Item = styled.span`
  display: flex;
  align-items: center;
  padding: 8px 16px 8px 12px;
  border-radius: 3px;

  &:hover {
    background-color: #254A5D;
  }

  .selected & {
    background-color: #254A5D;
  }

  .collapse & {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    overflow: hidden;    
  }
`;

const ItemIcon = styled.span`  
  padding-right: 16px;

  .collapse & {
    padding-right: 0;
  }
`;

const ItemTitle = styled(Subject)`
  .collapse & {
    display: none;
  }
`;

export default class NavigationItem extends PureComponent<ItemProps> {
    render() {

        const {
            label,
            to,
            iconName
        } = this.props;

        return (
            <li>
                <NavLink activeClassName="selected" to={to}>
                    <Item>
                        <ItemIcon>
                            <Icon
                                name={iconName}
                                color={ICON_COLOR}
                            />
                        </ItemIcon>
                        <ItemTitle>
                            {label}
                        </ItemTitle>
                    </Item>
                </NavLink>
            </li>
        )
    }
}