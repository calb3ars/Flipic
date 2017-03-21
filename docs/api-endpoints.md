# API Endpoints
### HTML API
##### Root
  * `GET /` - Loads React web application

### JSON API
##### Users
  * `POST /api/users` - Create new user
  * `GET /api/users` - Load all users
  * `GET /api/users/:id` - Retrieve specific user
  * `PATCH /api/users/:id` - Update user


  <!-- * `GET /api/users/:id/photos` - All photos from specific user -->
  <!-- * `GET /api/users/:id/followers` - All users following specified user -->
  <!-- * `GET /api/users/:id/following` - All users that specified user is following -->

##### Sessions
  * `POST / api/session` - New session
  * `DELETE / api/session` - Logout session

##### Images
  * `POST /api/photos` - Create new image
  * `GET /api/photos` - Load all images
  * `GET /api/photos/:id` - Retrieve specfic image
  * `PATCH /api/photos/:id` - Update image
  * `DELETE /api/photos/:id` - Remove image


  <!-- * `GET /api/photos/:id/tags` - All tags for specific image
  * `GET /api/photos/:id/comments` - All comments for specific image
  * `GET /api/photos/:id/likes` - All likes for a specific image -->

##### Follow
  <!-- * `POST /api/photos/:photo_id/likes` - Add like to a photo -->
  * `POST /api/follows` - Add follow to a photo
  * `DELETE /api/follows/:id` - Remove follow

##### Likes
  <!-- * `POST /api/photos/:photo_id/likes` - Add like to a photo -->
  * `POST /api/likes` - Add like to a photo
  * `DELETE /api/likes/:id` - Remove like (also removes association with user and image)

##### Comments
  <!-- * `POST /api/photos/:photo_id/comments` - Add comment to specific image -->
  * `POST /api/comments` - Add comment to specific image

##### Tags
  * `GET /api/tags` - All tags
  <!-- * `POST /api/photos/:photo_id/tags` - All tags for a specific image -->
  * `POST /api/tags` - All tags for a specific image
  * `DELETE /api/tags/:id` - Deletes specified tag
  * `Get /api/tags/:id` - Retrieves specified tag
  * `GET /api/tags/:id/photos` - Returns all photos containing specified tag
