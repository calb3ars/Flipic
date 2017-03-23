export const createComment = (comment) => {
  return $.ajax({
    method: "POST",
    url: "api/comments/",
    data: { comment: comment }
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${commentId}`
  });
};
