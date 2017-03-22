json.id photo.id
json.user photo.user
json.url photo.url
json.caption photo.caption
json.location photo.caption
json.timestamp photo.timestamp
json.likes_count photo.likes_count
json.likes photo.likes

json.likeToggle photo.user_likes.map(&:id).include?(current_user.id)
