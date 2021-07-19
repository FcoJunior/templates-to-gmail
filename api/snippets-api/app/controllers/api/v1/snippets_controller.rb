module Api
    module V1
        class SnippetsController < ApplicationController

            # List all snippets
            def index
                snippets = Snippet.where(email: params[:email]).order('updated_at DESC');
                render json: { data:snippets }, status: :ok
            end
        end
    end
end