# Flipic
[Flipic Live App](www.flipic.io "Flipic Live")<br /><br />
Flipic is a full-stack web application inspired by Instagram. It features a Ruby on Rails backend with a PostgreSQL database, and React.js with a Redux framework on the frontend.

### Features & Implementation
##### Image Rendering and Storage
Users are presented with a continuous stream of images, each containing the uploader's avatar and username, the image and caption along with number of likes, associated comments, and an input form to add comments.

A second view within the user account page allows a user to view their individual images in presentation mode. This view presents the image with the user's avatar and username, image timestamp, comments, and comments form.

Image information is stored in the database under the images table with img_url, user_id, caption, and timestamp information. Once a user is logged in, images in the stream are constructed from images from accounts the user is following.

##### Likes
Users are given the ability to "like" posts to show their approval, much like Facebook likes. When an image is liked, the like counter for that image increases in real-time. This is accomplished by maintaining an internal component state for the image's likes. On click, the state's count is updated and the database is updated asynchronously so the user receives instant feedback. Users can only like an image once (clicking the icon to multiple times will toggle whether the image is liked by the current user).

The database contains a likes table which holds an image_id, user_id (of the user liking the image), and timestamp. To keep track of an image's likes count, the database sums the number of like instances with the corresponding image_id.

##### Follow Accounts
Users have the ability to follow users that they want to see more photos from. When a user follows another account, the user being followed is added to the current user's "following" list.

##### Image Comments
Users can add comments to images to give feedback or launch discussion around the subject of the image. In the stream, up to three associated comments show up beneath each image in addition to a short form to add comments. Comments are displayed using a CommentIndex component which nests CommentListItems and the CommentForm.

In the database, comments are located within the comments table. This table has the following columns: image_id, user_id, body, created_at, updated_at.

### Future Features

##### Comment Folding
If an image has more than 3 comments, the newest three comments are shown and the total comment count is rendered.

##### Image Upload (Posts)
Users can upload photos from their own computer or mobile device. The user can also add a caption and tags to their post. After the image has been uploaded, the user will be directed to the new image's show page to verify the image has been uploaded.

##### Direct Messaging
Users will be able to message each other using private messaging. Users can initiate a message conversation from the other user's account page or from their following users page.

##### Hashtags
In order to enhance the user experience in finding content, images can have tags that describe their content, style, and additional meta data. In the search bar, a user can search for a tag and will be shown image results with the corresponding tags.

##### UX Updates over Instagram
Currently, Instagram's mobile and browsers applications do not let you scroll sideways through an account's photos while in presentation mode. When viewing an image in presentation mode, a user should be able to click left or right to scroll through the uploading user's additional images. Scrolling down or clicking the center of the image will return the user to the feed.
