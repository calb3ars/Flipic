json.id photo.id
json.user photo.user
json.url photo.url
json.caption photo.caption
json.location photo.location
json.timestamp photo.timestamp
json.likes_count photo.likes_count
json.likes photo.likes
json.comments photo.comments do |comment|
  json.id comment.id
  json.body comment.body
  json.author do
    json.extract! comment.author, :username, :id
  end
end

json.likeToggle photo.user_likes.map(&:id).include?(current_user.id)
