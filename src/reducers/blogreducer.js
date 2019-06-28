const blogreducer = (myBlogStore = [], { type, action }) => {
    switch (type) {
        case 'ADD_POST':
            return [action, ...myBlogStore];
        case 'UPDATE_POST':
            return myBlogStore.map(item => (item.id === action.id ? action : item));
        case 'REMOVE_POST':
            return myBlogStore.filter(item => item.id !== action);
        default:
            return myBlogStore;
    }
};
export default blogreducer;
