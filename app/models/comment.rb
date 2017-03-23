# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :author, :photo, :body, presence: true

  belongs_to :author,
    class_name: "User",
    foreign_key: :user_id

  belongs_to :photo
end
