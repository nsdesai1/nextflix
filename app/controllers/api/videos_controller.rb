class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
            .with_attached_thumbnail
            .with_attached_trailer
            .includes(:genres)

        @genres = Genre.all.includes(:videos)

        render :index
    end

    def show
        @video = Video.find_by(params[:id])

        render :show
    end
end
