json.extract! user, :id, :username, :profile_image, :tagline, :photo_count, :followers, :leaders, :follower_count, :leader_count

json.photos user.photos do |photo|
  json.id photo.id
  json.user photo.user
  json.url photo.url
  json.caption photo.caption
  json.location photo.caption
  json.timestamp photo.timestamp
  json.likes_count photo.likes_count
  json.likes photo.likes
  json.comments photo.comments do |comment|
    json.set! comment.id
    json.body comment.body
    json.author do
      json.extract! comment.author, :username
    end
  end
end
if user.followers.include?(current_user)
  json.followToggle true
else
  json.followToggle false
end
