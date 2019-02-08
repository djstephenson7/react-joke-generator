# frozen_string_literal: true

module Api
  module V1
    class JokesController < ApplicationController
      before_action :set_joke, only: %i[show update destroy]

      # GET /jokes
      def index
        @jokes = Joke.all

        render json: @jokes
      end

      # GET /jokes/1
      def show
        puts params[:id]
        # render json: @joke
        @joke = Joke.all
        joke = {
                "type": "success",
                "value": {
                  "id": @joke[(params[:id].to_i) -1].id,
                  "joke": @joke[(params[:id].to_i) -1].joke,
                  "categories": []
                }
              }
              puts joke
              # puts @joke
        render json: joke
      end

      # POST /jokes
      def create
        @joke = Joke.new(joke_params)

        if @joke.save
          render json: @joke, status: :created, location: @joke
        else
          render json: @joke.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /jokes/1
      def update
        if @joke.update(joke_params)
          render json: @joke
        else
          render json: @joke.errors, status: :unprocessable_entity
        end
      end

      # DELETE /jokes/1
      def destroy
        @joke.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_joke
        @joke = Joke.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def joke_params
        params.require(:joke).permit(:joke)
      end
    end
  end
end
