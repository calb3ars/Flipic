json.id photo.id
json.user photo.user
json.url photo.url
json.caption photo.caption
json.location photo.caption
json.timestamp photo.timestamp
json.likes_count photo.likes_count
# May not need Likes on frontend
json.likes photo.likes
json.comments photo.comments do |comment|
  json.set! comment.id
  json.body comment.body
  json.author do
    json.extract! comment.author, :username
  end
end

json.comment_authors photo.comment_authors

json.likeToggle photo.user_likes.map(&:id).include?(current_user.id)
