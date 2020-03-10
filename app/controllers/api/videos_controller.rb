class Api::VideosController < ApplicationController

    def index
        @videos = Video.all

        render :index
    end

    def show
        @video = Video.find_by(params[:id])

        render :show
    end
end
