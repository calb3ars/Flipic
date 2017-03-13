```js
{
  currentUser: {
    id: 1,
    username: "calb3ars"
    profile_image: "app/assets/images/users/calb3ars.jpeg"
  },

  follows: {
    1: {
      follower_id: 1,
      following_id: 23
    }
  },

  forms: {
    signUp: {errors:[]},
    logIn: {errors:["Invalid login credentials"]},
    createPhoto: {errors: ["Image must be uploaded"]}
  },

  user: {
    id: 1,
    username: "calb3ars",
    name: "Andrew Jiang",
    tagline: "Coding, music, and art...the world is my canvas!",
    followersCount: 10
    followers: [2, ...],
    followingCount: 11
    following: [2, ...],
    photosCount: 15,
    photos: [2, ...]
  },

  photos: {
    1: {
      id: 1,
      url: "app/assets/images/calvin_hobbes.jpeg"
    },
    2: {
      id: 3,
      url: "app/assets/images/calvin_hobbes_wagon.jpeg"
    }
  }

  photo: {
    1: {
      id: 1,
      url: "app/assets/images/calvin_hobbes.jpeg",
      author_id: 1,
      author: "",
      caption: "Building character, one line of code at a time",
      likesCount: 10,
      commentsCount: 5,

      likes: {
        1: {
          id: 1,
          username: "calb3ars"
        }
      }

      comments: {
        1: {
          username: "calvinsDad",
          body: "Don't forget to eat your vegetables!"
        }
      }

      tags: {
        1: {
          id: 1,
          name: "code"
        },
        2: {
          id: 2,
          name: "inspiration"
        }
      }
    }
  }
}
