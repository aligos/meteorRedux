const PER_PAGE_SKIP = 10
export default function pageSkip(state = 0, action = {}){
  switch (action.type) {
    case 'MODERATION_CHANGE_PAGE':
      return action.data.currentPageNumber * PER_PAGE_SKIP;
    default:
      return state;
  }
};
