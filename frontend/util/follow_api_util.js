export const createFollow = (follow) => (
  $.ajax({
    method: "POST",
    url: "/api/follows",
    data: { follow }
  })
);

export const deleteFollow = (id) => (
  $.ajax({
    method: "DELETE",
    url: `/api/follows/${id}`
  })
);
