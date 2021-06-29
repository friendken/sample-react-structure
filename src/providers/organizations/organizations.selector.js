import { createSelector } from 'reselect'
import { ORGANIZATION_TYPE } from 'constants/organization.constants'

export const organizationSelector = organizations => Object.values(organizations.list);

export const organizationActiveSelector = createSelector(
  organizationSelector,
  (organizations) => organizations.filter(item => !item.archived && item.type === Object.keys(ORGANIZATION_TYPE)[0])
);

export const organizationTestSelector = createSelector(
  organizationSelector,
  (organizations) => organizations.filter(item => item.type !== Object.keys(ORGANIZATION_TYPE)[0])
);

export const organizationInactiveSelector = createSelector(
  organizationSelector,
  (organizations) => organizations.filter(item => item.archived)
);