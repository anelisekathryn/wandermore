class PlacesController < ApplicationController
  before_action :set_place, only: [:show]
  before_action: :authorize_request, only: [:index, :create, :update, :destroy]
  before_action: :set_user_place, only: [:update, :destroy]

  # GET /places
  def index
    @places = @current_user.places

    render json: @places
  end

  # GET /places/1
  def show
    render json: @place
  end

  # POST /places
  def create
    @place = Place.new(place_params)
    @food.user = @current_user
    if @place.save
      render json: @place, status: :created
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /places/1
  def update
    if @place.update(place_params)
      render json: @place
    else
      render json: @place.errors, status: :unprocessable_entity
    end
  end

  # DELETE /places/1
  def destroy
    @place.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_place
      @place = Place.find(params[:id])
    end

    def set_user_place
      @place = Food.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def place_params
      params.require(:place).permit(:list, :country, :month, :year)
    end
end
