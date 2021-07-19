class AddEmailToSnippets < ActiveRecord::Migration[6.1]
  def change
    add_column :snippets, :email, :string
  end
end
