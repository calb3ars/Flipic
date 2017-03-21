json.extract! user, :id, :username, :profile_image, :tagline, :photo_count, :photos, :followers, :leaders, :follower_count, :leader_count

json.followToggle = user.followers.include?(current_user) ? true : false
