module Api
    module V1
        class SnippetsController < ApplicationController

            # List all snippets
            def index
                snippets = Snippet.where(email: params[:email]).order('updated_at DESC');
                render json: { data:snippets }, status: :ok
            end

            def create
                snippet = Snippet.new(snippet_params)
                if snippet.save
                    render json: { data:snippet }, status: :ok
                else
                    render json: { error_message:'Snippent not saved', data:snippet.erros }, status: :unprocessable_entity
                end
            end
            
            private
			def snippet_params
				params.permit(:title, :body, :email)
			end
        end
    end
end