const controller = 'tags';

export const tagsController = {
  getAllTags: {
    controller,
    action: 'getAllTags',
    method: 'GET'
  },
  getAllTagRecords: {
    controller,
    action: 'getAllTagRecords',
    method: 'GET'
  },
  getTagByTagId: {
    controller,
    action: 'getTagByTagId',
    method: 'GET'
  },
  getTagRecordByTagId: {
    controller,
    action: 'getTagRecordByTagId',
    method: 'GET'
  },
  getUserInfoByTagId: {
    controller,
    action: 'getUserInfoByTagId',
    method: 'GET'
  }
};
