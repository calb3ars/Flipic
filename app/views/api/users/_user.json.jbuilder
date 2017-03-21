json.extract! user, :id, :username, :profile_image, :tagline, :photo_count, :photos, :followers, :following, :follower_count, :following_count

json.followToggle = user.followers.include?(current_user) ? true : false
