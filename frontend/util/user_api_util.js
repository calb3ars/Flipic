export const fetchUser = (username) => (
  $.ajax({
    method: "GET",
    url: `/api/${username}`
  })
);
