# Schema Information

### users
column_name     | data_type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
tagline         | string    |
profile_image   | text      |

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
url         | text      | not null
user_id     | integer   | not null, foreign key (users), indexed
caption     | string    |
location    | string    |
created_at  | datetime  |
updated_at  | datetime  |

## likes
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (users), indexed, unique (photo_id)
photo_id    | integer   | not null, foreign key (photos), indexed
created_at  | datetime  |
updated_at  | datetime  |

## comments
column_name | data_type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (users), indexed
photo_id    | integer   | not null, foreign key (photos), indexed
created_at  | datetime  |
updated_at  | datetime  |


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
