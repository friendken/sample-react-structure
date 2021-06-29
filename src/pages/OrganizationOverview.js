/* eslint prettier/prettier: "off" */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Tabs, Button } from 'te-antd';

// ACTIONS
import { fetchOrganizations } from 'providers/organizations/organizations.actions';
import { setBreadcrumbs } from 'providers/globalUI/globalUI.actions';

// COMPONENTS
import { SectionHeader } from 'components/PageLayout/PageLayout';
import { OrganizationActive, OrganizationInactive, OrganizationTest } from '../../components/OrganizationList';
import OrganizationCopyModal from '../../components/OrganizationCopyModal';

const { TabPane } = Tabs;

const OrganizationOverviewPage = ({
  fetchOrganizations,
  setBreadcrumbs,
  history,
}) => {
  useEffect(() => {
    fetchOrganizations();
    setBreadcrumbs([
      {
        path: 'organizations',
        label: 'Organizations',
      },
    ]);

  }, []);


  return (
    <div>
      <SectionHeader
        sectionTitle="Organizations"
        buttonBar={(
          <Button
            type="button"
            color="primary"
            onClick={() => history.push('/organizations/new')}
            icon="plus"
          >
            New organization
          </Button>
        )}
      />
      <Tabs>
        <TabPane tab="Active" key="active">
          <OrganizationActive />
        </TabPane>
        <TabPane tab="Deactivated" key="inactive">
          <OrganizationInactive />
        </TabPane>
        <TabPane tab="Test" key="test">
          <OrganizationTest />
        </TabPane>
      </Tabs>
      <OrganizationCopyModal />
    </div>
  );
}

const mapStateToProps = ({ organizations }) => ({
  organizationsLoading: organizations.organizationsLoading,
  organizations: organizations.list,
});

const mapActionsToProps = {
  fetchOrganizations,
  setBreadcrumbs,
};

OrganizationOverviewPage.propTypes = {
  fetchOrganizations: PropTypes.func.isRequired,
  setBreadcrumbs: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapActionsToProps
  )(OrganizationOverviewPage)
);
