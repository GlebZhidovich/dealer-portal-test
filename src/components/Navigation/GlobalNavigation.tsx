import React from 'react';
import styled from 'styled-components';
import NavigationItem, { ItemProps } from "./NavigationItem";
import { NavigationTitle } from "../Typography";
import { Profile } from "../Profile";
import { Collapse } from "../Collapse";
import { Language } from "../Language";
import { Help } from "../Help";

interface Props {
    onClickHelp: () => void;
    onClickQuickSearch: () => void;
    onClickLogout: () => void;
    isFetching: boolean;
    main: ItemProps[];
    admin: ItemProps[];
}

interface State {
    isCollapse: boolean
}

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

const SideBar = styled.aside<{isCollapse: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${props => props.isCollapse ?  "64px" : "224px"};
  height: 100vh;
  padding: 0 10px;
  background-color: #577F95;
  transition: all 0.5s;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 100%;
  height: 62px;
  margin-top: 12px;
  margin-bottom: 8px;
  background-color: white;
  
  .collapse & {
    height: 44px;
  }
`;

const Separator = styled.div`
  height: 2px;
  margin: 11px 0 16px;
  background: rgba(37, 74, 93, 0.6);
  border-radius: 3px;
`;

export default class GlobalNavigation extends React.PureComponent<Props, State> {

    state = {
        isCollapse: false
    }

    toggleNav = () => {
        this.setState((prevState) => {
            return {
                isCollapse: !prevState.isCollapse
            }
        })
    }

    render() {

        const { isCollapse } = this.state;

        const {
            onClickHelp,
            main,
            admin
        } = this.props;

        return (
            <SideBar
                className={isCollapse ? 'collapse' : ''}
                isCollapse={isCollapse}
            >
                <div>
                    <Logo/>
                    <List >
                        {
                            main.map((item: ItemProps) => <NavigationItem
                                key={item.iconName}
                                {...item}/>)
                        }
                    </List>
                    <NavigationTitle>
                        administration
                    </NavigationTitle>
                    <List>
                        {
                            admin.map((item: ItemProps) => <NavigationItem
                                key={item.iconName}
                                {...item}
                                />)
                        }
                    </List>
                </div>

                <footer>
                    <Language/>
                    <Help onClick={onClickHelp}/>
                    <Profile/>
                    <Separator/>
                    <Collapse onToggleClick={this.toggleNav}/>
                </footer>
            </SideBar>
        )
    }
}