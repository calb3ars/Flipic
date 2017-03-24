# Flipic
[Flipic Live Domain App](http://www.flipic.io/)
[Flipic Heroku App](https://flipic.herokuapp.com/ "Flipic Live")<br /><br />
Flipic is a full-stack web application inspired by Instagram. It features a Ruby on Rails backend with a PostgreSQL database, and React.js with a Redux framework on the frontend. In order to highlight the colors and action of the photos, the UI design is minimal with accents to indicate actions and features.

![Demo login](http://res.cloudinary.com/calb3ars/image/upload/c_scale,w_600/v1490385294/Screen_Shot_2017-03-24_at_12.54.30_PM_oapdik.png)

### Features & Implementation
##### Image Rendering and Storage
Users are presented with a continuous stream of images, each containing the uploader's avatar and username, the image and caption along with number of likes, associated comments, and an input form to add comments. Once a user is logged in, images in the stream are constructed from images from accounts the user is following. If a new user signs up, they are given a feed of all the photos so they can discover accounts to follow. In order to avoid N + 1 queries for retrieving each photo's uploader and comments, photos are queried from the database using the Rails' `includes`.

A second view within the user account page allows a user to view their individual images in presentation mode.


Fetching of the images from the database.
Avoiding N + 1 requests is vital for faster image rendering
```Ruby
  def index
    if (current_user.followers.length > 2)
      @filtered_photos = current_user.stream_photos.order('created_at DESC').includes(:likes, :user, :user_likes, comments: [:author])
    else
      @filtered_photos = Photo.all.includes(:likes, :user, :user_likes, comments: [:author])
    end

    @photos = current_user_liked(@filtered_photos)
  end
```

##### Following Users
As mentioned above, the stream is composed of images gathered from accounts the currentUser is following. When a user visits another user's page, they can click a button that toggles the follow relationship between the currentUser and the other account.

From an application perspective, the database contains a table with "Follow" instances. Each follow instance has a "leader" (the account being followed), and a "follower" (the user who wants to include the other account in their stream). During each session, the currentUser is in the perspective of the "follower" each time a Follow is created. In the controller, the currentUser's id is not passed from the backend as params. Instead, the backend's session current_user is used to pass in the id. Once the "leader's" user_id is passed to the controller, a Follow instance is created. Users can have many followers (from a leader perspective) and many leaders (from a follower perspective) through the follows join table.

When the frontend requests a profile, the json jbuilder checks if the currentUser's leaders includes the account's user_id and sends forward a boolean value with the remaining user profile data.

```Ruby
class User
  ...
has_many :follower_instances,
  class_name: "Follow",
  foreign_key: :follower_id

  has_many :followers,
    through: :leader_instances,
    source: :follower

has_many :leader_instances,
  class_name: "Follow",
  foreign_key: :leader_id

  has_many :leaders,
    through: :follower_instances,
    source: :leader
```



```Ruby
class Follow < ApplicationRecord
  validates :leader_id, uniqueness: { scope: :follower_id }

  belongs_to :leader,
    class_name: "User",
    foreign_key: :leader_id

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id

  def self.find_follow_by(follower_id, leader_id)
    self.class.find_by({follower_id: follower_id, leader_id: leader_id})
  end
end
```

##### Likes
Users are given the ability to "like" posts to show their approval, much like Facebook likes. When an image is liked, the like counter for that image increases in real-time. Additionally, users can only like a photo once (clicking the heart icon multiple times for a photo will toggle whether the image is liked or not by the current user).

This is accomplished by maintaining an internal counter (state) for the photo's likes and a boolean value that toggles whether the photo has been liked or not. On click, the photo's state values are updated immediately (providing instant visual feedback while the database updates asynchronously.

Users can only like an image once (clicking the icon to multiple times will toggle whether the image is liked by the current user). This is managed by also keeping track of a likeToggle within the state.

When a like is dispatched, the `currentUser`'s information is not sent back to the controller. Instead, the photo_id is sent back through the API request and the controller users the currentUser's id from the backend session.

The database contains a likes table which holds an image_id, user_id (of the user liking the image), and timestamp. The database also verifies uniqueness of a like based on the combination of the photo_id and user_id.

![Liking Action](http://res.cloudinary.com/calb3ars/image/upload/v1490386107/output_1pl56H_vy0mzk.gif)


### Future Development

##### Direct Messaging
Users will be able to message each other using private messaging. Users can initiate a message conversation from the other user's account page or from their following users page.

##### Hashtags
In order to enhance the user experience in finding content, images can have tags that describe their content, style, and additional meta data. In the search bar, a user can search for a tag and will be shown image results with the corresponding tags.

##### UX Updates over Instagram
Currently, Instagram's mobile and browsers applications do not let you scroll sideways through an account's photos while in presentation mode. When viewing an image in presentation mode, a user should be able to click left or right to scroll through the uploading user's additional images. Scrolling down or clicking the center of the image will return the user to the feed.
