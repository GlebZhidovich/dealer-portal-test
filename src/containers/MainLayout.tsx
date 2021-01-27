import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { GlobalNavigation } from '../components/Navigation';
import { AppContext, ROUTES } from '../constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
`;

const NavigationAndContent = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

const Content = styled.div`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  min-width: 0;
`;

const MainLayout: React.FunctionComponent<any> = props => {
  const { reloadUser } = React.useContext(AppContext);
  return (
    <Container>
      <NavigationAndContent>
        <GlobalNavigation
          onClickHelp={()=> console.log('help')}
          onClickQuickSearch={()=> console.log('help')}
          onClickLogout={() => reloadUser(null)}
          isFetching={false}
          main={[{
            label: 'Sites',
            to: ROUTES.sites,
            iconName: 'shield-off',
          }, {
            label: 'Reports',
            to: ROUTES.reports,
            iconName: 'reports',
          }, {
            label: 'Tasks',
            to: ROUTES.tasks,
            iconName: 'tasks',
          }]}
          admin={[{
            label: "Users",
            to: ROUTES.users,
            iconName: 'users',
          }, {
            label: "Communications",
            to: ROUTES.communications,
            iconName: 'communications',
          }, {
            label: "Training",
            to: ROUTES.training,
            iconName: 'training',
          }, {
            label: "Site Proposals",
            to: ROUTES.siteProposals,
            iconName: 'documents',
          }]}

        />
        <Content>
          {props.children}
        </Content>
      </NavigationAndContent>
    </Container>
  );
}

export default MainLayout;
