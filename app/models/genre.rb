class Genre < ApplicationRecord
    validates :name, presence: true

    has_many :video_genres
    has_many :videos
        through: :video_genres
        source: :video
end
