class Video < ApplicationRecord
    validates :title, :description, :media_type, :duration, :rating, :year, presence: true

    has_one_attached :trailer
    has_one_attached :thumbnail
end
