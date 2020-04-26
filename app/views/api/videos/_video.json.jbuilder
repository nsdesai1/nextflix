json.extract! video, :id, :title, :description, :media_type, :duration, :rating, :year


if (video.thumbnail.attached?)
    json.thumbnail url_for(video.thumbnail)
elsif
    json.thumbnail "404 NO URL"
end

if (video.trailer.attached?)
    json.trailer url_for(video.trailer)
elsif
    json.trailer "404 NO URL"
end

json.genreIds video.genres.pluck(:id)