Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/nearby_bathrooms', to: 'bathrooms#get_nearby'
end
