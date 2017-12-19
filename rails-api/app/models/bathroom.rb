class Bathroom < ApplicationRecord
  # for spatial queries Bathroom.where('ST_DistanceSphere(lnglat, ST_MakePoint(-70,50)) <= 200 * 1609.34').count

  def Bathroom.nearby(lat, lng)
    order_string = "ACOS(COS(RADIANS(lat)) * COS(RADIANS(#{lat})) * " +
                   "COS(RADIANS(lng) - RADIANS(#{lng})) + " +
                   "SIN(RADIANS(lat)) * SIN(RADIANS(#{lat})))"
    Bathroom.order(order_string).limit(5)
  end
end
