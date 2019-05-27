const controller = 'group';

export const groupController = {
  getGroupList: {
    controller,
    method: 'GET'
  },
  getUserList: {
    controller,
    action: 'users',
    method: 'GET'
  },
  getGroupById: {
    controller,
    method: 'GET'
  }
};
