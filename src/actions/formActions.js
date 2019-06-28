export const addPost = post => ({
    action:post,
    type: 'ADD_POST',
});

export const removePost = postId => ({
    action:postId,
    type: 'REMOVE_POST',
});

export const updatePost = post => ({
    action:post,
    type: 'UPDATE_POST',
});
