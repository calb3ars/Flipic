export const fetchUser = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  })
);

export const fetchUserPhoto = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/photos/${id}`
  })
);
