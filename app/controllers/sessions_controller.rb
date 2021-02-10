class SessionsController < ApplicationController
  
  def new

  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      render json: {
        status: 200,
        logged_in: true,
        user: user
      }
      
    else
      
      render json: { status: "error", message: "Username or Password does not match." }, status: :unprocessable_entity
    end
  end

  def destroy
  end
end