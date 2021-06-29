import _ from 'lodash';
import { asyncAction } from 'providers/utils/actionHelpers';
import { api } from 'providers/api';
import { alertOnError } from 'providers/api/api.model';
import {
  FETCH_ORGANIZATIONS,
  FETCH_ORGANIZATIONS_SUCCESS,
  FETCH_ORGANIZATIONS_FAILURE,
} from './organizations.actionTypes';

// /////////////////////////////////////////////////////////////
// GET ORGANIZATIONS
// @funcs:
// fetchOrganizations
// /////////////////////////////////////////////////////////////

export const fetchOrganizations = asyncAction(
  {
    type: FETCH_ORGANIZATIONS,
    success: FETCH_ORGANIZATIONS_SUCCESS,
    failure: FETCH_ORGANIZATIONS_FAILURE,
    callback: alertOnError,
  },
  async () => {
    // eslint-disable-next-line no-return-await
    return await api.get('/organizations');
  }
);

export const searchOrganization = ({ searchText, filterKey }) => dispatch => dispatch({ type: SEARCH_ORGANIZATIONS, searchText, filterKey })