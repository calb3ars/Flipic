Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resources :follows, only: [:create, :show, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :photos
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resource :search, only: [:show]
  end

  root "static_pages#root"
end
