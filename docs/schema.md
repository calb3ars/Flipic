# Schema Information

### users
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
tagline         | text      |
profile_image   | string    |

### follows
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follower_id     | integer   | not null, foreign key (users), indexed, unique (following_id)
following_id    | integer   | not null, foreign key (users), indexed

## photos
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
url         | string    | not null
caption     | text      |
user_id     | integer   | not null, foreign key (users), indexed

## likes
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (users), indexed, unique (photo_id)
photo_id    | integer   | not null, foreign key (photos), indexed

## comments
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (users), indexed
photo_id    | integer   | not null, foreign key (photos), indexed


## tags
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, unique

## photo_tags
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (users), indexed, unique (tag_id)
tag_id      | integer   | not null, foreign key (tags), indexed
