import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'te-antd';
import OrganizationWrapper from './OrganizationWrapper';
import { organizationTestSelector } from '../../providers/organizations/organizations.selector'

const OrganizationActive = ({ columns, data, organizationsLoading }) => {
  return (
    <Table
      rowKey='_id'
      columns={columns}
      dataSource={data}
      loading={organizationsLoading}
    />
  )
}

OrganizationActive.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.any).isRequired,
  data: PropTypes.arrayOf(PropTypes.any),
  organizationsLoading: PropTypes.bool,
}

OrganizationActive.defaultProps = {
  data: [],
  organizationsLoading: false,
}

const mapPropToState = ({ organizations }) => ({
  searchText: _.get(organizations, ['orgSearch', 'test'], ''),
  organizations: organizationTestSelector(organizations),
  organizationsLoading: organizations.organizationsLoading,
})

export default connect(mapPropToState)(OrganizationWrapper(OrganizationActive, 'test'));