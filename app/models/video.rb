# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  media_type  :string           not null
#  duration    :string           not null
#  rating      :string           not null
#  year        :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord
    validates :title, :description, :media_type, :duration, :rating, :year, presence: true

    has_one_attached :trailer
    has_one_attached :thumbnail

    has_many :video_genres
    has_many :genres,
        through: :video_genres,
        source: :genre
end
