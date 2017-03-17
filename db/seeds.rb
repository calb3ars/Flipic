# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  {
    username: "andrew",
    password: "password"
  },
  {
    username: "demo",
    password: "password"
  },
  {
    username: "guest",
    password: "password"
  },
  {
    username: "gage",
    password: "ragegage"
  },
  {
    username: "vinson",
    password: "123456"
  },
  {
    username: "beebeean",
    password: "bobaboba"
  }
])

Photo.create({user_id: 1, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
Photo.create({user_id: 2, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
Photo.create({user_id: 3, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
Photo.create({user_id: 4, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
Photo.create({user_id: 5, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
Photo.create({user_id: 1, url: "https://mikaelahonen.com/wp-content/uploads/2016/10/splitwise-logo-kulujen-jakaminen-mobiilisovelluksella.jpg"})
