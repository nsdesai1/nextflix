json.video do 
    json.partial! 'api/videos/video', video: @video
    json.trailer @video.trailer.map { |file| url_for(file) }
end
