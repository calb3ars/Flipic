json.extract! photo, :id, :url, :user, :caption, :location, :timestamp, :likes_count

json.id photo.id
json.username photo.user.username
json.url photo.url
json.caption photo.caption
json.location photo.caption
json.timestamp photo.timestamp
json.likes_count photo.likes_count
json.likes photo.likes.pluck(:user_id)

photo.user_likes.each do |user|
  if user.id === current_user.id
    json.likeToggle true
    return
  end
  json.likeToggle false
end

#  include?(current_user.id)
#   json.likeToggle true
# else
#   json.likeToggle false
# end
