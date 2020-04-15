class Video < ApplicationRecord
    validates :title, :description, :media_type, :duration, :rating, :year, presence: true

    has_one_attached :trailer
    has_one_attached :thumbnail

    has_many :video_genres
    has_many :genres
        through: :video_genres,
        source: :genres
end
