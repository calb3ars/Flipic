Root

### NavComponent
  * Homepage Button
  * Search Bar
  * Discover Button
  * Follows Button
  * Account Button

### StreamContainer
  * ImageIndex (Component)
  * ImageListItem (Component)
      * ImageHeader (Component)
        * UserAvatar (Component)
        * Timestamp
      * ImageDisplay (Component)
      * ImageDetail (Component)
      * CommentIndex
        * CommentListItem
        * CommentLikeContainer
          * Like Button
          * CommentForm

### ProfileContainer
  * UserComponent
    * CurrentUser Profile Image
    * Username
    * Edit Profile Button
    * Logout Button
    * PostCount
    * FollowerCount
    * FollowingCount
    * User Firstname
  * AccountImageIndex
    * AccountImageItem

### ImageContainer
  * ImageShowComponent (Component)
    * LeftNav
    * Image
    * ImageDetailComponent (Component)
      * UserAvatar (Component)
      * Likes
      * Timestamp
      * Captionm
      * CommentList
        * CommentItem
          * Delete Comment Button
      * CommentLikeContainer
        * Like Button
        * CommentForm
    * RightNav

### ImageFormContainer
  * ImageForm
    * Image
    * Caption
    * Tags
    * Submit Button
