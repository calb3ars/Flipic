json.extract! photo, :id, :url, :user, :caption, :location, :timestamp, :photo_likes

if photo.user_likes.include?(current_user)
  json.likeToggle true
else
  json.likeToggle false
end

if photo.user.followers.include?(current_user)
  json.followToggle true
else
  json.followToggle false
end
