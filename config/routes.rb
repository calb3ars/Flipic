Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resource :search, only: [:show]
  end

  root "static_pages#root"
end
