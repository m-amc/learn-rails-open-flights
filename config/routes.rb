Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  # this will basically route request that are not for existing paths pre-defined in our api back to the index path. this will help us handle our routing to our react components without interferring with our actual rails routes for our API
  get '*path', to: 'pages#index', via: :all
end
