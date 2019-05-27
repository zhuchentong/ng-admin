const controller = 'users';

export const usersController = {
  getAllGroupRecords: {
    controller,
    action: 'getAllGroupRecords',
    method: 'GET'
  },
  getUser: {
    controller,
    action: 'user',
    method: 'GET'
  },
  getAction: {
    controller,
    action: 'user/actions',
    method: 'GET'
  },
  getTagByUserId: {
    controller,
    action: 'getTagByUserId',
    method: 'GET'
  }
};
