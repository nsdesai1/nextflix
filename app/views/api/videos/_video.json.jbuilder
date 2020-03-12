json.extract! video, :id, :title, :description, :media_type, :duration, :rating, :year
json.trailer url_for(video.trailer)
json.thumbnail url_for(video.thumbnail)