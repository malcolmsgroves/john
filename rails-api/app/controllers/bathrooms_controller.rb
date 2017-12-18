class BathroomsController < ApplicationController

  def get_nearby
    location = bathroom_params
    order_string = "lnglat <-> st_makepoint(#{location[:lng]},#{location[:lat]})"
    bathrooms = Bathroom.order(order_string).limit(5)
    render :json => bathrooms.as_json
  end

  private
    def bathroom_params
      params.permit(:lat, :lng)
    end
end
