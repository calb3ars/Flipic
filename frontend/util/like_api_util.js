export const createLike = photo_id => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like: {photo_id} }
  });
};

export const deleteLike = photo_id => {
  return $.ajax({
    method: "DELETE",
    url: `api/likes/${photo_id}`,
    data: { like: {photo_id} }
  });
};
