import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { StatusLabel } from 'components/StatusLabel/StatusLabel';
import OrganizationActions from '../OrganizationActions';
import OrganizationSearch from '../OrganizationSearch';

const tableTemplateStatus = org => (
  <StatusLabel color={!org.archived ? 'success' : 'attention'}>
    {!org.archived ? 'Active' : 'Inactive'}
  </StatusLabel>
);

const columns = [
  {
    title: 'Organization Name',
    dataIndex: 'name',
  },
  {
    title: 'Status',
    render: tableTemplateStatus,
  },
  {
    title: 'Created At',
    render: (org) => <span>{moment(org.createdAt).format('LLL')}</span>,
  },
  {
    title: 'Actions',
    align: 'right',
    render: (org) => <OrganizationActions organization={org} />,
  },
];

const OrganizationWrapper = (Component, organizationStatus) => ({
  children,
  organizations,
  searchText,
  ...props
}) => {
  const organizationMemo = useMemo(() => {
    return organizations.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()))
  }, [organizations, searchText])
  return (
    <>
      <OrganizationSearch filterKey={organizationStatus} />
      <Component {...props} columns={columns} data={organizationMemo}>
        {children}
      </Component>
    </>
  )
}

OrganizationWrapper.propTypes = {
  organizations: PropTypes.arrayOf(PropTypes.any),
  organizationsLoading: PropTypes.bool,
};

OrganizationWrapper.defaultProps = {
  organizations: [],
  organizationsLoading: false,
}


export default OrganizationWrapper;