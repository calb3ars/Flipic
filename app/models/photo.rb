# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  url                :text             not null
#  user_id            :integer          not null
#  caption            :string
#  location           :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  current_user_liked :boolean
#

class Photo < ApplicationRecord
  validates :url, :user_id, presence: true
  belongs_to :user

  has_many :likes
  has_many :comments

  has_many :user_likes,
    through: :likes,
    source: :user

  has_many :comment_authors,
    through: :comments,
    source: :author

  attr_reader :timestamp
  attr_accessor :current_user_liked

  def likes_count
    self.likes.length
  end

  def timestamp
    min = ((Time.now - self.created_at) / 1.minute).round
    hrs = ((Time.now - self.created_at) / 1.hour).round
    days = ((Time.now - self.created_at) / 1.day).round

    if days >= 7
      @timestamp = "#{(days / 7).round}w"
    elsif hrs >= 24
      @timestamp = "#{days}d"
    elsif hrs >= 1
      @timestamp = "#{hrs}h"
    else
      @timestamp = "#{min}m"
    end

    @timestamp
  end
end
