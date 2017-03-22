json.extract! user, :id, :username, :profile_image, :tagline, :photo_count, :photos, :followers, :leaders, :follower_count, :leader_count

if user.followers.include?(current_user)
  json.followToggle true
else
  json.followToggle false
end
