# Flipic
[Flipic Live App](https://flipic.herokuapp.com/ "Flipic Live")<br /><br />
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
