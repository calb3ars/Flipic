# == Schema Information
#
# Table name: follows
#
#  id           :integer          not null, primary key
#  follower_id  :integer          not null
#  following_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Follow < ApplicationRecord
  validates :following_id, uniqueness: { scope: :follower_id }

  belongs_to :user,
    class_name: "User",
    foreign_key: :following_id
  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id
end
