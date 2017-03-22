json.extract! photo, :id, :url, :user, :caption, :location, :timestamp, :likes_count

if photo.user_likes.include?(current_user.id)
  json.likeToggle true
else
  json.likeToggle false
end
