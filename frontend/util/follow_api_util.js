export const createFollow = following_id => {
  debugger
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { follow: {following_id}}
  })
};

export const deleteFollow = following_id => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${following_id}`,
    data: {id: following_id}
  })
);
