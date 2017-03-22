export const createLike = photoId => {
  return $.ajax({
    method: "POST",
    url: "/api/likes",
    data: { like: {photoId} }
  });
};

export const deleteLike = photoId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/likes/${photoId}`,
    data: { like: {photoId} }
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
