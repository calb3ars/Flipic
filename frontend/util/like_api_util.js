export const createLike = photo_id => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like: photo_id }
  });
};

export const deleteLike = photo_id => {
  debugger
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${photoId}`,
    data: { like: photo_id }
  });
};

export const createPhotoLike = photoId => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {like: { photo_id: photoId}}
  });
};

export const deletePhotoLike = photoId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${photoId}`
  });
};
