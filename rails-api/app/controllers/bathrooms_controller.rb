class BathroomsController < ApplicationController

  def nearby
    location = bathroom_params
    bathrooms = Bathroom.nearby(location[:lat], location[:lng])
    #bathrooms = Bathroom.select("lat", "lng", order_string + "AS distance").order("distance").all
    render :json => bathrooms.as_json
  end

  private
    def bathroom_params
      params.permit(:lat, :lng)
    end
end
