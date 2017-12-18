class Bathroom < ApplicationRecord
  # for spatial queries Bathroom.where('ST_DistanceSphere(lnglat, ST_MakePoint(-70,50)) <= 200 * 1609.34').count
  
end
