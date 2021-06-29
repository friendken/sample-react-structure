import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { Table } from 'te-antd';
import OrganizationWrapper from './OrganizationWrapper';
import { organizationInactiveSelector } from '../../providers/organizations/organizations.selector'

const OrganizationInactive = ({ columns, data, organizationsLoading }) => (
  <Table
    rowKey='_id'
    columns={columns}
    dataSource={data}
    loading={organizationsLoading}
  />
)

OrganizationInactive.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  organizationsLoading: PropTypes.bool,
}

OrganizationInactive.defaultProps = {
  data: [],
  organizationsLoading: false,
}

const mapPropToState = ({ organizations }) => ({
  searchText: _.get(organizations, ['orgSearch', 'inactive'], ''),
  organizations: organizationInactiveSelector(organizations),
  organizationsLoading: organizations.organizationsLoading,
})

export default connect(mapPropToState)(OrganizationWrapper(OrganizationInactive, 'inactive'));