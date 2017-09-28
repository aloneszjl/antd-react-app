import get from 'lodash/get';

export const getCurrentRoute = state => get(state, 'router.locationBeforeTransitions') || {};
