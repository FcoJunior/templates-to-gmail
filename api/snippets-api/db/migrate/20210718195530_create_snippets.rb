class CreateSnippets < ActiveRecord::Migration[6.1]
  def change
    create_table :snippets, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.text :body

      t.timestamps
    end
  end
end
