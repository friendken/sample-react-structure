import _ from 'lodash';
import { initialState } from './organizations.initialState';
import * as types from './organizations.actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ORGANIZATIONS:
      return {
        ...state,
        organizationsLoading: true,
        list: {},
      };

    case types.FETCH_ORGANIZATIONS_SUCCESS:
      return {
        ...state,
        organizationsLoading: false,
        list: _.keyBy(action.payload.data.organizations, '_id'),
      };

    case types.FETCH_ORGANIZATIONS_FAILURE:
      return {
        ...state,
        organizationsLoading: false,
        list: [],
      };

    case types.SEARCH_ORGANIZATIONS:
      return {
        ...state,
        orgSearch: {
          ...state.orgSearch,
          [action.filterKey]: action.searchText
        }
      }

    default:
      return {
        ...state,
      };
  }
};
