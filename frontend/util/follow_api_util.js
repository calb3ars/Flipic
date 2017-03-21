export const createFollow = following_id => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { follow: {following_id}}
  });
};

export const fetchFollow = following_id => {
  return $.ajax({
    method: "GET",
    url: `/api/search?q=${following_id}`
  });
};

export const deleteFollow = id => {
  return $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`
  });
};
