class VideoGenre < ApplicationRecord
    validates :video_id, :genre_id, presence: true

    belongs_to :video
    belongs_to :genre 
end
