# Root

### Sign Up Page
  * AuthFormContainer
    * Phone Images
      * App Slideshow
    * SignUpForm (Component)
      * Flipic Logo
      * Tagline
      * Login with Facebook (Future functionality)
      * Email (Params) ***
      * First Name
      * Last Name
      * Username
      * Password
      * Sign Up Button
      * Terms & Privacy Policy
    * Button to Log in Form
    * App Links (Future functionality)
      * iTunes Store Button
      * Google Play Store Button
    * About Us
    * Copyright 2017 Flipic

<!-- *** Consider switching order and only having username and password -->

### Sign In Page
  * AuthFormContainer
    * Phone Images
      * App Slideshow
    * SignInForm (Component)
      * Flipic Logo
      * Username
      * Password
      * Log in Button
    * Demo Login Button
    * About Us
    * Copyright 2017 Flipic

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

### Routes
| Path                    | Component            |
|-------------------------|----------------------|
| "/sign-up"              | "AuthFormContainer"  |
| "/sign-in"              | * AuthFormContainer  |
| "/home"                 | "NavComponent"       |
| "/home"                 | "HomeContainer"      |
| "/home/stream"          | "StreamContainer"    |
| "/profile/:id"          | "NavComponent"       |
| "/profile/:id"          | "ProfileContainer"   |
| "/profile:id/followers" | FollowerContainer    |
| "/profile:id/following" | "FollowingContainer" |
| "/profile/:photo_id     | "ImageContainer"     |
| "/new-image             | "ImageFormContainer" |
