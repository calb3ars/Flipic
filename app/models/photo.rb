# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  url        :text             not null
#  user_id    :integer          not null
#  caption    :string
#  location   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :url, :user_id, presence: true
  belongs_to :user

  attr_reader :timestamp

  def timestamp_seconds
    
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
